import React from "react";
import { Link, useParams } from "react-router-dom";
import useCategories from "../../../composition/useCategories";

const CategoriesMenu = () => {
  const { categorySlug } = useParams();
  const { categories } = useCategories({
    rootOnly: true,
    sort: ["orderHint asc"],
  });
  const isActive = (slug) => slug === categorySlug;
  return (
    <nav>
      {categories && categories.length && (
        <ul>
          {categories?.map((category) => (
            <li
              className="position-static"
              key={category.id}
              data-test="category-1st-level"
            >
              <Link
                className={isActive(category.slug) ? "active" : ""}
                to={`/products/${category.slug}`}
                data-test="category-1st-level-link"
              >
                {category.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default CategoriesMenu;
