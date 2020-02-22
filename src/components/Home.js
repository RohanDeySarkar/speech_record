import React, {Component} from 'react';
import MyCards from './MyCards';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
export default class Home extends Component {
    render(){
        const {
            items,
            deleteAll,
            handleDelete,
            handleEdit
        } = this.props;
        return(
            <ul>
            <div className="border-top my-3 invisible"></div>
            <h3 className="text-capitalize text-center">
               my speeches
            </h3>
            <Container>
                <Row>
                    <Col sm={2}>
                    <Button 
                        variant="danger"
                        onClick={deleteAll}
                    >
                        Delete All
                    </Button>
                    </Col>
                    <Col sm={8}>
                        {
                            items.map(item => {
                                return(
                                    <MyCards
                                        item={item} 
                                        handleDelete={() => handleDelete(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                    />
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
            </ul>
        )
    }    
}