module.exports = {
  apps: [
    {
      name: "transaction-app",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",

      env_development: {
        NODE_ENV: "development"
      },
      env_staging: {
        NODE_ENV: "staging"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};