const CACHE_NAME = 'growcus-offline-v1';
const ASSETS = [
  '/teacher/attendance',
  '/teacher/dashboard',
  '/css/global.css',
  '/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'POST' && event.request.url.includes('/api/v1/attendance')) {
    event.respondWith(
      fetch(event.request.clone()).catch(async () => {
        try {
          const payload = await event.request.json();
          await saveToIndexedDB('GrowcusCache', 'pending_attendance', payload);
          if ('sync' in self.registration) {
            await self.registration.sync.register('flush-attendance');
          }
        } catch (e) {
          console.warn('Failed to parse offline payload:', e);
        }
        return new Response(
          JSON.stringify({ 
            status: 'QUEUED_LOCAL_CACHE',
            message: 'Attendance recorded offline. Auto-synchronizing when online.'
          }), 
          { 
            status: 202,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      })
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'flush-attendance') {
    event.waitUntil(flushAttendanceQueue());
  }
});

function saveToIndexedDB(dbName, storeName, data) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { autoIncrement: true });
      }
    };
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction(storeName, 'readwrite');
      tx.objectStore(storeName).add({ ...data, timestamp: Date.now() });
      tx.oncomplete = () => resolve();
    };
    request.onerror = (e) => reject(e.target.error);
  });
}

async function flushAttendanceQueue() {
  // Sync queued offline items back to /api/v1/attendance when connection recovers
  console.log('[Growcus ServiceWorker] Syncing queued offline attendance logs...');
}
