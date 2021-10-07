import styles from '../../styles/Advantage.module.scss';
import AdvantagesCard from './AdvantagesCard';
import EnergySvg from '../../public/img/Vector.svg'

export default function Advantages() {
    return (
        <div id={'advantages'} className="container">
            <div className={styles.advantages}>
                <h1 className={styles.advantages_title}>ADVANTAGES</h1>
                    <AdvantagesCard />
            </div>
        </div>
    )
}