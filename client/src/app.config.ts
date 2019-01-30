export default {
  client_id: process.env.REACT_APP_CLIENT_ID,
  issuer: `https://${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirect_uri: window.location.origin + '/implicit/callback',
  url: `https://${process.env.REACT_APP_OKTA_DOMAIN}`,
};
