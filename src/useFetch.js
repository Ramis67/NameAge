import { useState } from "react";

export default function useFetch() {
  function get(url) {
    return fetch(url).then((response) => response.json());
  }

  return { get };
}
