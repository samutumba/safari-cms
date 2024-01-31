module.exports = [
  'strapi::logger',
  'strapi::errors',
  //middlewares.js
 {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,  
        directives: {
          "script-src": ["'self'", "https:"],
          "connect-src": ["'self'", "blob:", "*.strapi.io"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "strapi.io",
            "s3.amazonaws.com",
            "cdn.jsdelivr.net",
          ],
          "style-src": [
            "'self'",
            "'unsafe-inline'",
          ],
          "font-src": [ "'self'"],
           "frame-src": [ "http://localhost:*", "self", "sandbox.embed.apollographql.com" ],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

];
