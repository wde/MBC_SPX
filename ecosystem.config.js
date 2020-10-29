module.exports = {
  apps : [
    {
    'name': 'LIVE',
    'script': 'server.js',
    'args': 'config.json'
    },
    {
      'name': 'DEV',
      'script': 'server.js',
      'args': 'config5001.json'
      }
  ]
};
