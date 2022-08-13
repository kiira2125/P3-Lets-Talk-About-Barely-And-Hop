import React from "react";
import BestBrewers from "../BestBrewers";
import Profile from "../Profile";
import AddRecipe from "../AddRecipe";
import ViewRecipe from "../ViewRecipe";
import ViewAllRecipes from "../ViewAllRecipes";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "best-brewers":
        return <BestBrewers />;
      case "profile":
        return <Profile />;
      case "add-recipe":
        return <AddRecipe />;
      case "view-recipe":
        return <ViewRecipe />;
      case "view-all-recipes":
        return <ViewAllRecipes />;

      default:
        return <BestBrewers />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default LandingPage;
