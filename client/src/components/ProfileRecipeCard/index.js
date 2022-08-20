import React  from 'react';

const ProfileRecipeCard = (props) => {
    return (
        <div className="profile-recipe-card">
            <div className="profile-recipe-card-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="profile-recipe-card-info">
                <h1 className="profile-recipe-card-name">{props.name}</h1>
                <p className="profile-recipe-card-bio">{props.bio}</p>
            </div>
        </div>
    );



export { default } from './ProfileRecipeCard';