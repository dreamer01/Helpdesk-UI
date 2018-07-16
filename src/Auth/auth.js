import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'XXXXX_XXXX_XXXX',
    clientID: 'XXXXXX_XXXXXXXXX_XXXXXXX',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'XXXXXX_XXXX_XXX',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
