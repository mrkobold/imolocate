import { useState } from 'react'
import PostAddress from './PostAddress'
import LookupAddress from './LookupAddress'

export default function Dashboard() {

    const [thingy, setThingy] = useState("post_vs_lookup")

    const addPostAddressThingy = () => {
        setThingy("post")
    }

    const addLookupAddressThingy = () => {
        setThingy("lookup")
    }

    return (
        <div>
            {
                <div>
                    <button onClick={addPostAddressThingy}>Post an Address</button>
                    <button onClick={addLookupAddressThingy}>Look up and Address</button>
                </div>
            }
            {
                thingy === "post" &&
                <div>
                    <PostAddress/>
                </div>
            }
            {
                thingy === "lookup" &&
                <div>
                    <LookupAddress />
                </div>
            }
        </div>
    )
}