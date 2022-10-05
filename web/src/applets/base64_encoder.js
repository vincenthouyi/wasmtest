import React, { useRef } from 'react';
import init, { base64_encode } from "wasmtest-vincenthou";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

init();

function Base64EncoderInner(props) {
    const ref = useRef(null);

    return (
        <Stack>
            <h3>Clear text</h3>
            <textarea
                ref={ref}
                id="cleartext"
            ></textarea>
            <Button
                onClick={() => props.onClick(ref.current.value)}
            >Encode</Button>
            <h3>Encoded text</h3>
            <textarea
                value={props.encoded}
                readOnly
            />
        </Stack >
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