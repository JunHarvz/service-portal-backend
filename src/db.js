import postgres from "postgres";
import env from "dotenv";

env.config();

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });

export const query = async (text, params) => {
  return sql.unsafe(text, params);
};