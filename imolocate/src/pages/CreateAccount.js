import React, { useEffect, useState } from 'react';
import WeaveAPI from "../weaveapi/weaveapi";

const weaveApi = new WeaveAPI().create({});

export default function CreateAccount() {

    const [accountKeys, setAccountKeys] = useState([]);
    const [isCreated, setIsCreated] = useState(false);

    const createAccount = () => {
        const keys = weaveApi.generateKeys();
        setAccountKeys(keys);
        setIsCreated(true);
    }



    return (
        <div>
            {isCreated && <p>AccountKeys={JSON.stringify(accountKeys)}</p>}
            {!isCreated && <button onClick={createAccount}>Generate keypair!!</button>}
        </div>
     )
}
