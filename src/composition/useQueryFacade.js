import { useQuery } from "@apollo/client";
import { useMemo, useEffect, useState } from "react";
import { getValue } from "../lib";
//for some reason someone did not only thought it would
//  be a good idea for vue useQuery to have a completely
//  different api than React but it doesn't even fit
//  the vue options api (skip is called enabled)
const useFixOptions = (options) => {
  let fixed = { ...options };
  const enabled = useMemo(() =>
    getValue(options?.skip) ? !getValue(options.skip) : true
  );
  if (options.skip) {
    fixed = { ...options, enabled };
  }
  return fixed;
};
//adjust React useQuery to vue apollo
export default (query, { variables, onCompleted, ...options }) => {
  const newOptions = useFixOptions(options);
  const [data, setData] = useState();
  const { result, loading, error } = useQuery(query, variables, newOptions);

  // setData((result) => {
  //   if (typeof onCompleted === "function") {
  //     onCompleted(result);
  //   }
  //   data = result;
  // });

  useEffect(() => {
    // if (getValue(result)) {
    //   setData(getValue(result));
    // }
    setData(result);
  }, [result]);

  return { data, loading, error };
};
