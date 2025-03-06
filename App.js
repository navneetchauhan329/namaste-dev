import React from "react";
import ReactDOM from "react-dom/client";

const Head = () => <h1 className="heading">Heloo ft</h1>;
const Heading = () => (
  <>
    <Head></Head>
    {Head()}
    {Head()}
    <h1 className="heading">Heloo from react</h1>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
