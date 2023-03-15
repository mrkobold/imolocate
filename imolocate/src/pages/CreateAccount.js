import { useState} from 'react';
import WeaveAPI from "../weaveapi/weaveapi";
import { useStore } from '../zustandstore/zustandstore';

const weaveApi = new WeaveAPI().create({});

export default function CreateAccount() {

    const [isCreated, setIsCreated] = useState(false);
    const { pvk, pub, updatePvk, updatePub } = useStore();

    /** generate keys and register them in the local storage */
    const generateAndStoreKeys = () => {
        const keys = weaveApi.generateKeys();
        updatePvk(keys[0]);
        updatePub(keys[1]);
        setIsCreated(true);
    }

    return (
        <div>
            {isCreated && <p>Store: {<br/>}private key = {pvk}{<br/>}public key = {pub} </p>}
            {!isCreated && <button onClick={generateAndStoreKeys}>Generate keypair!!</button>}
        </div>
     )
}