import * as env from 'env-var';

export const appConfig = {
  port: env.get('PORT').asPortNumber(),
  databaseUrl: env.get('DATABASE_URL').required().asString(),
  jwtSecret: env.get('JWT_SECRET').required().asString(),
};
