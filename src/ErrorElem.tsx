import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Header from "./components/Header";

export function ErrorElem() {
  let error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        console.error("Page not found!");
        // window.location.hash
        break;
      // can we get other errors??

      default:
        console.error("Other route error", error);
        // FLAGS
        break;
    }
    return (
      <div>
        <Header />
        <div>
          <h1 className="text-5xl font-bold text-center">{error.status}</h1>

          <h2 className="text-2xl font-bold text-center">{error.statusText}</h2>
        </div>
      </div>
    );
  } else {
    console.error("Other error (not a route one though!!)", error);
    // if error is not an instance of Error, return
    if (!(error instanceof Error)) return null;
    return (
      <div>
        <Header />
        <div>
          <h1 className="text-5xl font-bold text-center">500</h1>

          <h2 className="text-2xl font-bold text-center">
            Something went wrong! Here's a description, hopefully it's helpful:
          </h2>
          <p className="text-center italic">{error.message}</p>
        </div>
      </div>
    );
  }
}
