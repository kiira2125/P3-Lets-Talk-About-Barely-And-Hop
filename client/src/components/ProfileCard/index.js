import React from 'react';

const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <div className="profile-card-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="profile-card-info">
                <h1 className="profile-card-name">{props.name}</h1>
                <p className="profile-card-bio">{props.bio}</p>
            </div>
        </div>
    );
}




export { default } from "./ProfileCard";