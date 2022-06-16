import helmet from "koa-helmet";

const cspOptions =
  process.env.NODE_ENV === "production"
    ? {
        directives: {
          defaultSrc: ["'self'", "*.trusted.com"],
          scriptSrc: ["'self'", "*.trusted.com"],
          scriptSrc: ["'self'"],
          frameAncestors: ["'none'"],
          imgSrc: ["'self'", "*.trusted.com"],
          styleSrc: ["'none'"],
          objectSrc: ["*.trusted.com"],
          upgradeInsecureRequests: [],
        },
      }
    : false;

export default helmet({ contentSecurityPolicy: cspOptions });
