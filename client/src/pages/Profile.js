import "./profile.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import RecipeCard from "../../components/ProfileRecipeCard/ProfileRecipeCard";

export default function Profile() {
  return (
    <div className="profile">
      <ProfileCard />
      <RecipeCard />
    </div>
  );
}