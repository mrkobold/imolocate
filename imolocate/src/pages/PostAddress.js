import { useState } from "react"
import { myStore } from '../zustandstore/myStore';
import WeaveHelper from "../weaveapi/helper";
import WeaveAPI from "../weaveapi/weaveapi";

export default function CreateAccount() {

    const [imobiliareUrl, setImobiliareUrl] = useState("");
    const [address, setAddress] = useState("");
    const {pvk, pub} = myStore((state) => ({pvk: state.pvk, pub: state.pub}));

    const sideChain = "http://localhost:20001/8d2f73df4ce3b70a864c5382b4d2c455";

    const updateImobiliareUrl = (event) => {
        setImobiliareUrl(event.target.value);
    }

    const updateAddress = (event) => {
        setAddress(event.target.value);
    }

    const handlePostAddress = async (event) => {
        event.preventDefault();
        console.log("Submitting:\nimobiliare.ro url = " + imobiliareUrl + "\naddress = " + address);

        let weavaApi = new WeaveAPI();
        console.log("weaveApi=" + JSON.stringify(weavaApi));

        let config = WeaveHelper.getConfig(sideChain, pub, pvk);
        console.log("config=" + JSON.stringify(config));

        const nodeApi = weavaApi.create(config);
        await nodeApi.init();
        console.log(nodeApi)

        const pong = await nodeApi.ping();
        console.log("pong=" + JSON.stringify(pong));

        const session = await nodeApi.login();
        console.log("session=" + JSON.stringify(session));
    }

    return (
        <div>
            <h1> Post Address Page, got pvk {pvk}</h1>
            <br/>

            <form onSubmit={handlePostAddress}>
                <label>
                    Imobiliare.ro url:
                    <input type="text" value={imobiliareUrl} onChange={updateImobiliareUrl} />
                </label>
                <br/>

                <label>
                    Address:
                    <input type="text" value={address} onChange={updateAddress} />
                </label>
                <br/>

                <input type="submit" value="Post"/>
            </form>
        </div>
     )
}
