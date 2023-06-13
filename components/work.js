import Link from 'next/link';
import styles from '../styles/Work.module.css';
import WorkCarousel from './workCarousel';

export default function Work(props) {
    return (
        <div className={styles.work}>
            <h3>{props.title}</h3>
            <h4>{props.year} / {props.lang}</h4>
            <div className={styles.tagArea}>
                {
                    props.tags.map(tag => {
                        return(
                            <div className={styles.tag}>{tag}</div>
                        )
                    })
                }
            </div>
            <WorkCarousel images={props.imgs} videos={props.videos} />
            <p>
                {props.statement}
            </p>
            
            <ul>
                <h4>Link</h4>
                {
                props.links.map((link, idx)=>{
                    return <li key={idx}><a href={link.url}>{link.title}</a></li>
                })
                }
            </ul>
        </div>
    );
}