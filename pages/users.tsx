import Link from 'next/link';
import useSWR from 'swr'
import styles from '../styles/User.module.css'

const User = (props: { user: any }) => {
    return <Link
        key={props.user.id}
        href={'/album'}><div className={styles.usercard}>
            {props.user.name}
        </div>
    </Link>
}
function Users() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users',
        (apiURL: string) => fetch(apiURL).then(res => res.json()))
    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
    return <div style={{display:'flex' , flexWrap:'wrap'}}>
{
    data && data.map((user: any) => {
        return <User key={user.id} user={user} />
    })
        }
    </div >
}
export default Users;