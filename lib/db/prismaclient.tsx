import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from '../../app/generated/prisma/client'

/*
Created as per best instructions in prisma/info.txt
Added adapter into global as well and not only the client
as it doesn`t really make sense to create several adapters 
yet only one client.
*/

const globalPrismaClient = global as unknown as { prisma: PrismaClient }
const getPrismaClient = () => {
    if (globalPrismaClient.prisma) {
        return globalPrismaClient.prisma;
    }

    const connectionString = `${process.env.DATABASE_URL}`;
    const adapter = new PrismaBetterSqlite3({ url: connectionString });
    const newClient = new PrismaClient({ adapter });

    if (process.env.NODE_ENV !== "production") {
        globalPrismaClient.prisma = newClient;
    }

    return newClient;
};

const prisma = getPrismaClient();

export { prisma };

if (process.env.NODE_ENV !== "production") globalPrismaClient.prisma = prisma;