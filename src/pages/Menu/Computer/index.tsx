import styles from './Computer.module.scss';
import options from './options.json'

function Computer() {
    return (
        <button className={styles.computer}>
            <span>Ordenar por</span>
            <div className={styles.computer__option}>
                {options.map(option => (
                    <div className={styles.computer__options} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}

export default Computer