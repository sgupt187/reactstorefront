import { useRef, useState } from "react";

// import useLocale from './useLocale';
import useCategories from "./ct/useCategories";

//vue specific useCategories
export default ({ categorySlug, skip, rootOnly, sort }) => {
  // const { locale } = useLocale();
  const [locale, setLocale] = useState("en");
  const { total, categories, loading, error } = useCategories({
    locale,
    categorySlug,
    rootOnly,
    sort,
    skip,
  });
  return { total, categories, loading, error };
};
