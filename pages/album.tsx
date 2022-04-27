import Link from 'next/link';
import useSWR from 'swr'
import styles from '../styles/User.module.css'

const Album = (props: { album: any }) => {
    return <Link key={props.album.id} href={'/photos'}><div className={styles.usercard}>
        {props.album.title}
    </div>
    </Link>
}

function Albums() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/albums',
        (apiURL: string) => fetch(apiURL).then(res => res.json()))
    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
            data && data.map((album: any) => {
                return <Album key={album.id} album={album} />

            })
        }
    </div>
}
export default Albums;