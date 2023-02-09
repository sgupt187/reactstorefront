import { useState, useEffect } from "react";

const useLocale = () => {
  const [locale, setLocale] = useState("en");
  return locale;
};

export default useLocale;
