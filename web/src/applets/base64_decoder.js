import React, { useRef } from 'react';
import init, { base64_decode } from "wasm-lib";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

init();

function Base64DecoderInner(props) {
    const ref = useRef(null);

    return (
        <Stack>
            <Form>
                <Form.Group>
                    <Form.Label>Encoded Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="encoded text"
                        rows={3}
                        ref={ref}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => props.onClick(ref.current.value)}
                >
                    Decode
                </Button>
                <Form.Group>
                    <Form.Label>Decoded Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={props.decoded}
                        readOnly
                    />
                </Form.Group>
            </Form>
        </Stack >
    )
}

class Base64Decoder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            decoded: "",
        }
    }

    doBase64Decode(cleartext) {
        const decoded = base64_decode(cleartext)
        this.setState(
            {
                decoded: decoded
            }
        )
    }

    render() {
        return <Base64DecoderInner
            onClick={(cleartext) => this.doBase64Decode(cleartext)}
            decoded={this.state.decoded}
        />
    }
}

export default Base64Decoder;