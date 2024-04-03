/* if ever deployed, just turn this off after adding .env ... */
export const USE_LOCAL_SERVICES = true;

export const PROJECT_ENVS = {
  MONGO_ENV: USE_LOCAL_SERVICES ? '//mongodb:27017/realtimewebcomms' : process.env.MONGO,
};
