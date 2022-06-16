import getServerUrl from "./getServerUrl";

const url = getServerUrl();

const FetchApi = (query, token) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((parseRes) => resolve(parseRes))
      .catch((err) => {
        console.log(err);
        resolve({ errors: [{ message: "Opps! Something went wrong" }] });
      });
  });
};

export default FetchApi;
