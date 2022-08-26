import React, { Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
import ProfileRecipeCard from '../../components/ProfileRecipeCard';
import RecipeCard from '../../components/RecipeCard';
import SecondaryNav from '../../components/SecondaryNav';
import App from '../../utils/usersAPI';
import AddRecipeButton from "../../components/AddRecipeButton/AddRecipeButton";
import './Profile.css';

class profile extends Component{
  state ={
    id: this.props.match.param.id,
    first: '',
    last: '',
    city: '',
    state:'',
    email: '',
    image: '',
    username: '',
    recipeArr: [],
    followAlert: '',
    followingArr: [],
    followersArr: [],
    likes: [],
    showFollowAlert: false,
    currentComp: 'PinRecord',
    alertClass:''
  }
}

componentWillMount() {
    this.loadUser(this.state.id);
}

loadUser = id => {
  API.getUser(id)
  .then(res => {
   this.setState({
    first: res.data.name.first,
    last: res.data.name.last,
    city: res.data.contact.city,
    state: res.data.contact.state,
    email: res.data.contact.email,
    image: res.data.image,
    recipeArr: res.data.recipes,
    followingArr: res.data.social.following,
    followersArr: res.data.social.followers,
    likes: res.data.social.favorites,
    username: res.data.username
    });
  })
   .catch (err => err);
}

handleFollowClick = () => {
  const loggedIn = sessionStorage.getItem('loggedIn');
  const currentBrewerID = sessionStorage.getItem('userID');

   if(!loggedIn){ 
    const msg = `Please login or register to follow ${this.state.first}${this.state.last}`;
     this.showMsgWithClass(msg, 'Ohh OH!');
   }else if (currentBrewerID === this.state.id){
    const msg = `Not allow to follow yourself, sorry!! ${this.state.first}`;
     this.showMsgWithClass(msg, 'Ohh OH!');
   }else{
    this.handleAddFollow(this.state.id);
   }
}

//comp is just short for component for my coding
showMsgWithClass = (message, alertClass) => {
  this.setState({
      showFollowAlert: true,
      followAlert: message,
      alertClass: alertClass ? alertClass : 'Error'
  })
}

handleComponentChange = comp => {
    this.setState({currentComp: comp});
};

renderComponent = () => {
 //utilizing switch, case and break/return find it easier then if else if and else
  switch(this.state.currentComp){
    case "pinRecord":
      return(
        //utilizing map  on Arr
        this.state.recipeArr.map((recipe, i) =>
        <ProfileRecipeCard
          key= {`recipe${i}`}
          _id = {recipe._id}
          style = {recipe.style}
          name = {recipe.name}
        />
     ));

     case "following":
        // utilizing map my followingArr
      return(
        <Col xs = {12}>
          <h2 className = 'totalFollowingHeader'>
            Your Total Following Count: {this.state.followingArr.length} Brewer-Buds
          </h2>
           {this.state.followingArr.map((user, i) =>
           <followingCard key = {`followingCard${i}`} user = {user} />
           )}
        </Col>
      );

      case "followers":
      // similar coding as above.
       return(
        <Col xs = {12}>
          <h2 className = 'totalFollowerHeader'>
            Your Total followers is: {this.state.followerArr.length} Brewer-Buds
          </h2>
           {this.state.followersArr.map((user, i) =>
              <followingCard key = {`followerCard_${i}`} user = {user} />
         )};
        </Col>
       );
    }
}