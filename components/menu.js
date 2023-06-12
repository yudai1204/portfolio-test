import Link from 'next/link';
import styles from '../styles/Menu.module.css';

export default function Menu({active}) {
    return (
        <div className={styles.menu}>
            <div className={styles.icons}>
                <img src="icon.jpg"></img>
            </div>
            <ul>
                <li className={styles.menuLi}><Link href="/">Home</Link></li>
                <li className={styles.menuLi}><Link href="/works">Works</Link></li>
                <li className={styles.menuLi}><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}