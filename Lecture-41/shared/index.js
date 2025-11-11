const { createClient } = require("redis");

const publisher = createClient();
const subscriber = createClient();

async function initRedis() {
  await publisher.connect();
  console.log("Redis publisher connected");
  await subscriber.connect();
  console.log("Redis subscriber connected");
}

initRedis().catch(console.error);

module.exports = { publisher, subscriber };
