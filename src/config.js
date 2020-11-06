let api_url;

if (process.env.NODE_ENV !== "production") {
  api_url = "http://localhost:8000";
}

// api
export const config = {
  url: api_url || process.env.REACT_APP_API,
  docTitle: "cheapandnice",
};
