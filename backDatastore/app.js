'use strict';

const express = require('express');
const crypto = require('crypto');

const app = express();
app.enable('trust proxy');
app.use(express.json());
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const {Datastore} = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = new Datastore();

/**
 * Insert a visit record into the database.
 *
 * @param {object} visit The visit record to insert.
 */
const insertVisit = (visit) => {
  return datastore.save({
    key: datastore.key('visit'),
    data: visit,
  });
};

/**
 * Retrieve the latest 10 visit records from the database.
 */
const getVisits = () => {
  const query = datastore
    .createQuery('visit')
    .order('timestamp', {descending: true})
    .limit(10);

  return datastore.runQuery(query);
};

app.post('/user', async (req, res, next) => {
  const {  name, age } = req.body;
  const newUser = await datastore.save({
    key: datastore.key('user'),
    data: {name, age},
  });

  res
      .status(200)
      .set('Content-Type', 'text/plain')
      .send(newUser)
      .end();
});

app.get('/user/:name', async (req, res) => {
        const { name } = req.params;
        const query = datastore
  .createQuery('user')
  .filter('name', '=', name)
 
  const tasks = await datastore.runQuery(query);
  res
  .status(200)
  .set('Content-Type', 'text/plain')
  .send(tasks)
  .end();

});

app.get('/', async (req, res, next) => {
  // Create a visit record to be stored in the database
  const visit = {
    timestamp: new Date(),
    // Store a hash of the visitor's ip address
    userIp: crypto
      .createHash('sha256')
      .update(req.ip)
      .digest('hex')
      .substr(0, 7),
  };

  try {
    await insertVisit(visit);
    const [entities] = await getVisits();
    const visits = entities.map(
      (entity) => `Time: ${entity.timestamp}, AddrHash: ${entity.userIp}`
    );
    res
      .status(200)
      .set('Content-Type', 'text/plain')
      .send(`Last 10 visits:\n${visits.join('\n')}`)
      .end();
  } catch (error) {
    next(error);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT || 8080, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});