import Link from 'next/link';
import useSWR from 'swr'

function Users() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users',
        (apiURL: string) => fetch(apiURL).then(res => res.json()))
    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
    return <>
        {
            data && data.map((user: any) => {
                return <Link key={user.id} href={'/album'}><span>{user.name}</span></Link>
            })
        }
    </>
}
export default Users;