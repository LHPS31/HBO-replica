import styles from '../css/nav.module.css';
import logo from '/Senai-frontend/HBO-React/hbo-react/src/images/hbo-logo.png';
export default function Nav() {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLogo}>
        <img className={styles.menuLogoImage} alt="logo hbo" src={logo} />
      </a>
      <div>
        <a href="signIn.jsx" className={styles.menuItem}>Entrar</a>
        <a href="signIn.jsx" className={styles.menuItem}>Assinar Agora</a>
      </div>
    </nav>
  )
}
