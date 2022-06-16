export default function () {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5003/graphQL";
  } else {
    return "https://noman-new-app.herokuapp.com/graphQL";
  }
}
