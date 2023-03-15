import { useState} from 'react';
import WeaveAPI from "../weaveapi/weaveapi";
import { useStore } from '../zustandstore/zustandstore';

const weaveApi = new WeaveAPI().create({});

export default function CreateAccount() {

    const [isCreated, setIsCreated] = useState(false);
    const { pvk, pub, updatePvk } = useStore();

    const createAccount = () => {
        const keys = weaveApi.generateKeys();
        updatePvk(keys[0]);
        setIsCreated(true);
    }

    return (
        <div>
            {isCreated && <p>Store private key = {pvk}</p>}
            {!isCreated && <button onClick={createAccount}>Generate keypair!!</button>}
        </div>
     )
}
