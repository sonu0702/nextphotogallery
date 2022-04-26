import useSWR from 'swr'

function Photos() {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/photos',
        (apiURL: string) => fetch(apiURL).then(res => res.json()))
    if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
    return <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid red'
    }}>
        {
            data && data.map((photo: any) => {
                return <div key={photo.id} style={{
                    width: 'fit-content',
                    height: 'fit-content',
                }}>
                    <img
                        key={photo.id}
                        src={photo.thumbnailUrl}
                    />
                </div>
            })
        }
    </div>
}
export default Photos;