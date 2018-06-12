import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'pushpendra01.auth0.com',
    clientID: 'A3y0EqgfaULXW7xX3QpHoLNamHNRZXWa',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://pushpendra01.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}