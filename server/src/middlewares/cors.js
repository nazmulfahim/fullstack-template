// const validOrigins = [
//   "https://fulldomain",
// ];

// const IN_PROD = process.env.NODE_ENV === "production";

// if (!IN_PROD) {
//   validOrigins.push("https://studio.apollographql.com");
//   validOrigins.push("http://localhost:3000");
// }

//allow cors for all domains
export default function verifyOrigin(ctx) {
  const origin = ctx.headers.origin;
  // if (inValidOrigin(origin)) return false;
  return origin;
}

// function inValidOrigin(origin) {
//   return validOrigins.indexOf(origin) === -1;
// }
