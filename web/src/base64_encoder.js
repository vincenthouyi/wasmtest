import React, { useRef } from 'react';
import init, { base64_encode } from "wasmtest-vincenthou";

init();

function Base64EncoderInner(props) {
    const ref = useRef(null);

    return (
        <div>
            <p>Clear text</p>
            <textarea
                ref={ref}
                id="cleartext"
            ></textarea>
            <button
                onClick={() => props.onClick(ref.current.value)}
            >Encode</button>
            <p>Encoded text</p>
            <textarea
                value={props.encoded}
                readOnly
            />
        </div >
    )
}

class Base64Encoder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encoded: "",
        }
    }

    doBase64Encode(cleartext) {
        const encoded = base64_encode(cleartext)
        this.setState(
            {
                encoded: encoded
            }
        )
    }

    render() {
        return <Base64EncoderInner
            onClick={(cleartext) => this.doBase64Encode(cleartext)}
            encoded={this.state.encoded}
        />
    }
}

export default Base64Encoder;