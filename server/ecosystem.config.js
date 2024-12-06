const config = {
  apps: [
    {
      name: "taho-ai-challenge",
      script: "./dist/index.js",
      max_memory_restart: "300M",
      autorestart: true,
    },
  ],
};

module.exports = config;
