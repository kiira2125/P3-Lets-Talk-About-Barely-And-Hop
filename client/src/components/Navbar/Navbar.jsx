import { Link } from "react-router-dom"
import { useAtom } from 'jotai'
import { userAtom } from '../../App'
function Navbar() {
  const [user, setUser] = useAtom(userAtom)

  return(
    <nav >
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p className="nav-item" style={{ padding: '0 8px' }}>
            Hops and Such
          </p>
        </Link>        
      <div>
          <ul style={{ display: 'flex', listStyle: 'none', flexGrow: 1, justifyContent: 'space-between' }}>
            {!user ? (<>
              <Link to="/login" style={{ textDecoration: 'none' }}>
              <li className="nav-item" style={{ padding: '0 8px' }}>
                Login
              </li>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <li className="nav-item" style={{ padding: '0 8px' }}>
                Signup
              </li>
            </Link>
            </>): (
              <Link to="/newrecipie" style={{ textDecoration: 'none' }}>
              <li className="nav-item" style={{ padding: '0 8px' }}>
                New Recipe
              </li>
            </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar