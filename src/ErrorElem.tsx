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

      default:
        break;
    }
  }
  return (
    <div>
      <Header />
      {/* 404 page */}
      {/* center text */}
      <div>
        <h1 className="text-5xl font-bold text-center">404</h1>

        <h2 className="text-2xl font-bold text-center">Page not found</h2>
      </div>
    </div>
  );
}
