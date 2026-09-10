export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          System Settings, API Gateways & Role Permissions
        </h1>
        <p className="text-xs text-slate-500">
          Staff permission matrix, integration keys (Meta, Tally ERP, NPCI UPI)
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-slate-900">API Gateway Integrations</h3>
        
        <div className="space-y-3">
          {[
            { name: "Meta WhatsApp Business Cloud API", status: "CONNECTED", key: "wh_access_token_v20_live" },
            { name: "Tally Prime ERP Connector", status: "SYNCED", key: "tally_host_local_port_9000" },
            { name: "NPCI Instant UPI Webhook Router", status: "ACTIVE", key: "npci_upi_checksum_sha256" },
          ].map((api, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <div>
                <span className="font-bold text-slate-900 block">{api.name}</span>
                <span className="font-mono text-slate-500 text-[10px]">{api.key}</span>
              </div>
              <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold text-[10px] rounded-full">
                {api.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
