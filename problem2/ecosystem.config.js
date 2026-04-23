module.exports = {
  apps: [
    {
      name: "node-app",

      // Entry point
      script: "./server.js",

      //  Enable clustering
      exec_mode: "cluster",
      instances: "max", // Uses all CPU cores

      // Auto-restart settings
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",

      //  Restart delay to prevent crash loops
      restart_delay: 4000,

      // Environment variables
      env: {
        NODE_ENV: "development",
        PORT: 3000
      },

      env_production: {
        NODE_ENV: "production",
        PORT: 3000
      },

      // Logging
      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,

      //  Advanced reliability
      min_uptime: "10s",        // app must stay up for 10s
      max_restarts: 10,         // max restarts before stopping

      //  Performance tuning
      listen_timeout: 8000,
      kill_timeout: 5000,

      //  Instance variables
      instance_var: "INSTANCE_ID",

      //  Merge logs from all instances
      merge_logs: true
    }
  ]
};