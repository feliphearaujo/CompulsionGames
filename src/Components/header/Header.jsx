import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { BuyIcon } from './components/Buy.icon'
import { SupportIcon } from './components/Support.icon'
import { ProfileIcon } from "./components/User.icon";
import { Logo } from './components/Logo.Icon';

function Header() {
  return (
    <header className={styles.Header} >
      <Logo/>
        <ul className={styles.menu}>
            <li><Link to="/"><BuyIcon/>Loja</Link></li>
            <li><Link to="./Help"><SupportIcon/>Suporte</Link></li>
            <li><Link to="./Account"><ProfileIcon/>Conta</Link></li>
        </ul>
    </header>
  )
}

export default Header