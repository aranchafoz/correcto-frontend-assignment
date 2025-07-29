import React from "react";

const ErrorPage: React.FC = () => (
  <div style={{ padding: 32, textAlign: "center" }}>
    <h1>Oops! Something went wrong.</h1>
    <p>The page you are looking for does not exist or an error occurred.</p>
    <a href="/">Go to Home</a>
  </div>
);

export default ErrorPage;
