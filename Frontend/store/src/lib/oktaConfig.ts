export const oktaConfig = {
  clientId: "0oamxgrni3nHr4ATB5d7",
  issuer: "https://dev-69061615.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
