import Redis, { RedisOptions } from "ioredis";

const config: RedisOptions = {
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
};

const connection = new Redis({
  host: "localhost",
  port: 6379,
});

export const getRedisConnection = () => connection;
export default connection;
