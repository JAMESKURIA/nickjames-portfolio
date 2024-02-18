module.exports = {
  apps: [
    {
      name: 'kuria-portfolio',
      script: 'npm',
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max'
    }
  ]
}
