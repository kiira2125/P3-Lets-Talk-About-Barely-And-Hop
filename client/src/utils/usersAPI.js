import axios from 'axios';

// here its coded to get all users by using the getUsers() method
export default{

getUsers: () => axios.get('/api/users'),
// coding to here to get the user by its ID 'getUser'
getUser: id => axios.get(`/api/users/${id}`),
//updating the user by its register ID 'updateUser'
updateUsers: (id, data) => axios.put(`/api/users/${id}`, data),
// same method of coding but will use deleteUser method by id
deleteUser: id => axios.delete(`/api/users/${id}`),
// now will use saveUser method to post new users to the webpage 
saveUser: userData => axios.post('/api/users',userData),
};