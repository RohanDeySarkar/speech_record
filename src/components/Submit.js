import React, { Component } from 'react'
import {
    Container,
    Row,
    Button,
    Form,
    Col
} from 'react-bootstrap';

export default class Submit extends Component {
    render() {

        const {
            item,
            head,
            editItem,
            handleChange,
            handleSubmit
        } = this.props;
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <div className="border-top my-3 invisible"></div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Enter Your Speech</Form.Label>
                                    <Form.Control
                                        type="text" 
                                        placeholder="speech header"
                                        name="head"
                                        value={head}
                                        onChange={handleChange}
                                    />
                                    <hr className="invisible"/>
                                    <Form.Control
                                        type="text" 
                                        placeholder="write your speech"
                                        name="item"
                                        value={item}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                {editItem ? 
                                <Button variant="success" type="submit">Edit</Button>
                                :<Button variant="primary" type="submit"> Submit </Button>
                                }
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
