import React, { Component } from 'react'
import {
    Card, Button, ButtonToolbar
} from 'react-bootstrap';

export default class MyCards extends Component {
    render() {
        const {
            item,
            handleDelete,
            handleEdit
        } = this.props;
        return (
            <ul>
            <div className="border-top my-3 invisible"></div>
            <Card>
                <Card.Body>
                    <Card.Header className="text-capitalize">Title: {item.head}</Card.Header>
                    <Card.Text>{item.title}</Card.Text>
                    <ButtonToolbar >
                    <Button 
                        className="mt-3 mx-2"
                        variant="outline-danger" 
                        size="sm"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                    <Button 
                        className="mt-3 mx-2"
                        variant="outline-success" 
                        size="sm"
                        onClick={handleEdit}
                    >
                        Edit
                    </Button>
                    </ButtonToolbar>
                </Card.Body>
            </Card>
            </ul>
        )
    }
}
