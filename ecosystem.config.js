module.exports = {
  apps: [
    {
      name: 'next-ssr',
      script: './node_modules/.bin/next',
      args: 'start --port 3000',
      watch: '.',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install --registry=https://registry.npm.taobao.org && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
}
