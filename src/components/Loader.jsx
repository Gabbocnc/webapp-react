import { mirage } from 'ldrs'

mirage.register()

export default function Loader() {
    return (
        <div className='d-flex bg-dark text-white loader p-5 justify-content-center '>
            <p>Loading...</p>
            <div>
                <l-mirage
                    size="100"
                    speed="2.5"
                    color="red"
                ></l-mirage>
            </div>
        </div>
    )
}