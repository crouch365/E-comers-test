import { lazy } from "react";

export const LoginPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-expect-error Simulate delay
        resolve(import("./LoginPage"));
      }, 1500);
    })
);
