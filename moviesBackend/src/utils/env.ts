import dotenv from 'dotenv';
dotenv.config();

const get = (key: string, fallback?: string): string => {
  const v = process.env[key] ?? fallback;
  if (v === undefined) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return v;
};

export const env = {
  NODE_ENV: get('NODE_ENV', 'development'),
  PORT: parseInt(get('PORT', '4000'), 10)
};