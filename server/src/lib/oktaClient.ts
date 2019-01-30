import okta from '@okta/okta-sdk-nodejs';

const client = new okta.Client({
  orgUrl: process.env.OKTA_URL,
  token: process.env.OKTA_API_TOKEN,
});

export default client;
