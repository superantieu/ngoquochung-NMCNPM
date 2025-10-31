import sql, { ConnectionPool } from "mssql";
import dotenv from "dotenv";

dotenv.config();

const config = {
    user: process.env.DB_USER || "",
    password: process.env.DB_PWD || "",
    server: process.env.DB_SERVER || "localhost",
    database: process.env.DB_NAME || "StudentDB",
    port: Number(process.env.DB_PORT) || 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true,
        trustedConnection: true,
    },
};

export const poolPromise: Promise<ConnectionPool> = new sql.ConnectionPool(
    config
)
    .connect()
    .then((pool: ConnectionPool) => {
        console.log("✅ Connected to SQL Server");
        return pool;
    })
    .catch((err: Error) => {
        console.error("❌ DB Connection Failed", err);
        throw err;
    });
