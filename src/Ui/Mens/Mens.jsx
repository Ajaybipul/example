import React from "react";

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-48">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
  </div>
);

export const ErrorMessage = ({ message }) => (
  <div className="text-center p-4 text-red-500">
    <p>{message}</p>
  </div>
);
