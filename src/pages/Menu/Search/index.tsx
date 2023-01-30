import styles from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ search, setSearch }: Props) {
    return (
        <div className={styles.search}>
            <input 
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <CgSearch 
                size={20}
                color="#4C4D5E"
            />
        </div>
    )
}

export default Search