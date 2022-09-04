import { useAtom } from 'jotai'
import { userAtom } from '../../state'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigation = useNavigate()
  const [user, setUser] = useAtom(userAtom)
  const navigate = useNavigate()
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
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
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
  const navigation = useNavigate()
  const [user, setUser] = useAtom(userAtom)
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res.status)
        if (res.status !== 200) {
          alert('Incorrect username or password')
          return res.status
        } 
        return res.json() 
      })
      .then((data) => {
        if (data === 400) return
        console.log(data)
        setUser(data)
        navigation('/newrecipe')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
     <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Signup;