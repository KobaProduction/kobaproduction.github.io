import {useEffect, useState} from 'react'
import {Row} from "react-bootstrap";
import {GetResult, load} from "@fingerprintjs/fingerprintjs"

function FingerprintInfo() {
    const [fingerprint, setFingerprint] = useState<GetResult | null>(null)
    useEffect(() => {
        load().then(fp => fp.get().then(result => setFingerprint(result)))
    }, []);

    return <Row>
        <h1>Fingerprint {!fingerprint ? "" : `(v${fingerprint.version})`}</h1>
        {
            !fingerprint ? <p>Loading fingerprint...</p> :
                <p><b>Your visitor ID</b>: <i>{fingerprint.visitorId}</i></p>
        }
    </Row>
}

export default FingerprintInfo;