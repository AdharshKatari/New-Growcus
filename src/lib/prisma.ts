import { PrismaClient } from "@prisma/client";
import { AsyncLocalStorage } from "async_hooks";

export const tenantContext = new AsyncLocalStorage<string>();

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const basePrisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error"] : ["error"],
  });

export const prisma = basePrisma.$extends({
  query: {
    $allModels: {
      async $allOperations({ args, query }) {
        const tenantId = tenantContext.getStore();
        if (!tenantId) return query(args);

        // Scope database connection with app.tenant_id for PostgreSQL RLS
        return basePrisma.$transaction(async (tx) => {
          await tx.$executeRaw`SELECT set_config('app.tenant_id', ${tenantId}, true)`;
          return query(args);
        });
      },
    },
  },
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = basePrisma;
}
