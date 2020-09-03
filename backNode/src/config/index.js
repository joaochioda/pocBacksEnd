let env = '';
if (process.env.GOOGLE_CLOUD_PROJECT === 'pocBackEnd') {
  env = 'prod';
} else {
  env = 'dev';
}

module.exports = {
    getConfig: () => require(`./database-${env}.js`),
    env,
}

