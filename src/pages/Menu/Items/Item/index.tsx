import logo from 'assets/logo.svg';
import styles from './Item.module.scss'

function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={logo} alt="image" />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>Macarrão</h2>
                    <p>Descrição</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>
                        Massa
                    </div>
                    <div className={styles.item__porcao}>
                        400g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve 2 pessoas
                    </div>
                    <div className={styles.item__valor}>
                        R$ 50
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item