import { useQuery } from "@tanstack/react-query";
import fetchTypes from "../data/fetchTypes";
import { useState } from "react";

export default function useTypesList() {
  const [typesList, setTypesList] = useState([]);
  const results = useQuery(["types", ''], fetchTypes);

  if (!results.isLoading) {
    setTypesList(results?.data?.results);
  } else {
    return { isLoading: true };
  }

  return [typesList ?? [], results.status];
}
