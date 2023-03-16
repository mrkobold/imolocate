import { useState} from 'react';
import WeaveAPI from "../weaveapi/weaveapi";
import { myStore } from '../zustandstore/myStore';
import { Link } from 'react-router-dom';

const weaveApi = new WeaveAPI().create({});

export default function CreateAccount() {

    const [isCreated, setIsCreated] = useState(false);
    const {pvk, pub, updatePvk, updatePub} = myStore((state) => ({pvk: state.pvk, pub: state.pub, updatePvk: state.updatePvk, updatePub: state.updatePub}));

    /** generate keys and register them in the local storage */
    const generateAndStoreKeys = () => {
        const keys = weaveApi.generateKeys();
        updatePub(keys[0]);
        updatePvk(keys[1]);
        setIsCreated(true);
    }

    return (
        <div>
            {isCreated && <p>Store: {<br/>}private key = {pvk}{<br/>} public key = {pub} </p>}
            {!isCreated && <button onClick={generateAndStoreKeys}>Generate keypair!!</button>}

            <Link to="/post">Post</Link>
        </div>
     )
}