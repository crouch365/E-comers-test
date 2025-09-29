import { lazy } from "react";

export const HomePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-expect-error Simulate delay
        resolve(import("./HomePage"));
      }, 1500);
    })
);
