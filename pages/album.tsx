import Link from 'next/link';
import useSWR from 'swr'

function Albums() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/albums',
        (apiURL: string) => fetch(apiURL).then(res => res.json()))
    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
    return <>
        {
            data && data.map((album: any) => {
                return <Link href={'/photos'}><span>{album.title}</span></Link>
            })
        }
    </>
}
export default Albums;