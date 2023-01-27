import styles from './Menu.module.scss'
import logo from '../../assets/logo.svg'

function Menu() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="logo"/>
            </nav>
        </main>
    )
}

export default Menu 