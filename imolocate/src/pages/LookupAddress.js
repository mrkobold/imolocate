import { useState } from "react";

export default function LookupAddress() {

    const [imobiliareUrl, setImobiliareUrl] = useState("");

    const handleLookupAddress = async (event) => {
        event.preventDefault();
        console.log("looking up address: " + imobiliareUrl)
    }

    const updateImobiliareUrl = (event) => {
        setImobiliareUrl(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleLookupAddress}>
                <label>
                    Imobiliare.ro url:
                    <input type="text" value={imobiliareUrl} onChange={updateImobiliareUrl} />
                </label>
                <br/>

                <input type="submit" value="Look up!"/>
            </form>
        </div>
    )
}