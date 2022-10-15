import React, { useRef } from 'react';
import init, { base64_encode } from "wasm-lib";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

init();

function Base64EncoderInner(props) {
    const ref = useRef(null);

    return (
        <Stack>
            <Form>
                <Form.Group>
                    <Form.Label>Clear text</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="cleartext"
                        rows={3}
                        ref={ref}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => props.onClick(ref.current.value)}
                >
                    Encode
                </Button>
                <Form.Group>
                    <Form.Label>Encoded text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={props.encoded}
                        readOnly
                    />
                </Form.Group>
            </Form>
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