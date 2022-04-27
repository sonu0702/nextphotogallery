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
    return <div className={styles.container}>
        {
            data && data.map((album: any) => {
                return <Link key={album.id} href={'/photos'}>
                    <Album album={album} />
                </Link>
            })
        }
    </div>
}
export default Albums;