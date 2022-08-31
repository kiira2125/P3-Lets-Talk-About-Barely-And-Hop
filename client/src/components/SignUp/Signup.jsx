import { useAtom } from 'jotai'
import { userAtom } from '../../App'
import {userNavigation} from 'react-router-dom'

function Signup() {
  const [user, setUser] = useAtom(userAtom)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.password.value)
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUser(data)
        userNavigation('newrecipe')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
} 

export function Login() {
  const [user, setUser] = useAtom(userAtom)
  const handleSubmit = (e) => {
    e.preventDefault()
    //need to fetch request
    let returnValue = { username: 'test' }
    setUser(returnValue)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signup;