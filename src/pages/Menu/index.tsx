import styles from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'
import Search from './Search'
import { useState } from 'react'

function Menu() {

    const [search, setSearch] = useState("")

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa!
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Cárdapio</h3>
                <Search search={search} setSearch={setSearch}/>
            </section>
        </main>
    )
}

export default Menu 