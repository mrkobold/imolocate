import { useState } from "react"

export default function CreateAccount() {

    const [imobiliareUrl, setImobiliareUrl] = useState("");
    const [address, setAddress] = useState("");

    const updateImobiliareUrl = (event) => {
        setImobiliareUrl(event.target.value);
    }

    const updateAddress = (event) => {
        setAddress(event.target.value);
    }

    const handlePostAddress = (event) => {
        event.preventDefault();
        console.log("Pressed submit button, form:\nimobiliare.ro url = " + imobiliareUrl + "\naddress = " + address);
    }

    return (
        <div>
            <h1> Post Address Page </h1>
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
