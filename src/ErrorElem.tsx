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
  } else {
    console.error("Other error (not a route one though!!)", error);
  }
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-5xl font-bold text-center">404</h1>

        <h2 className="text-2xl font-bold text-center">Page not found</h2>
      </div>
    </div>
  );
}
