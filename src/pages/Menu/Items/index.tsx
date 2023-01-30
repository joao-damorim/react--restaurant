import menu from './items.json'
import Item from './Item'
import styles from './Items.module.scss'

function Items() {
    return (
        <div className={styles.items}>
            {menu.map((item) => (
                <Item key={item.id} />
            ))}
        </div>
    )
}

export default Items