import Link from 'next/link';
import styles from '../styles/Menu.module.css';

export default function Menu(props) {
    return (
        <div className={styles.menu}>
            <div className={styles.icons}>
                <a href="https://yudai04.dev/">
                    <img src="https://yudai04.dev/icon.jpg" />
                </a>
            </div>
            <ul>
                <li className={styles.menuLi}><Link href="/">Home</Link></li>
                <li className={styles.menuLi}><Link href="/works">Works</Link></li>
                <li className={styles.menuLi}><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}