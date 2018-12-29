module.exports = {
  apps: [{
    name: 'pm2-node',
    script: 'index.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'root',
      host: '39.108.154.0',
      ssh_options: "StrictHostKeyChecking=no",
      ref: 'origin/master',
      repo: 'git@github.com:qianduan-duanwei/pm2-node.git',
      path: '/var/www/pm2-node',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.json --env production'
    }
  }
};