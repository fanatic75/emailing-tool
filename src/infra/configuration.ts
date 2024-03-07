export default function config() {
  return {
    db: {
      url: process.env.DATABASE_URL,
    },
    cache: {
      url: process.env.CACHE_URL,
    },
    mailer: {
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
    },
  };
}

export type configurationType = ReturnType<typeof config>;
