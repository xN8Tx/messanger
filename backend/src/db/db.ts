import pg, { PoolConfig } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const poolConfig: PoolConfig = {
  connectionString: process.env.POSTGRES_DB,
  ssl: false,
};

const dbPool = new Pool(poolConfig);

export default dbPool;
