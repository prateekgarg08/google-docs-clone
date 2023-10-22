"use client";
import React, { useEffect } from "react";

const error = ({ error, reset }: any) => {
  useEffect(() => {
    // Log the error to an error reporting service

    console.error("Error", error);
  }, [error]);

  return <div>error {error.toString()}</div>;
};

export default error;
