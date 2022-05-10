import React from 'react';
import { Card } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Question and Answer</h2>
            <div className="row">
                <Card className="text-center">
                    <Card.Header className='bg-info'>1. Difference between javascript and node js?</Card.Header>
                    <Card.Body>
                        <Card.Text className='bg-warning'>
                            Ans: Javascript is a simple programming language which is runs any browser JS Engine. Whereas Node JS is an interpreter or running environment for a JS programming language that holds many excesses, it requires libraries that can easily be accessed from JS programming for better.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
            <div className="row mt-3">
                <Card className="text-center">
                    <Card.Header className='bg-info'>2. When should you use nodejs and when should you use mongodb?</Card.Header>
                    <Card.Body>
                        <Card.Text className='bg-warning'>
                            Ans: MongoDB is designed to work with Large Scale Data. It can work on multiple servers and can be handle a large number of access request. So that, We can use MongoDB if we need handle multiple server, large scale data and huge access request.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
            <div className="row mt-3">
                <Card className="text-center">
                    <Card.Header className='bg-info'>3. Differences between SQL and NoSQL databases?</Card.Header>
                    <Card.Body>
                        <Card.Text className='bg-warning'>
                            Ans: SQL db are vertically scalable, while NoSQL db are horizontally scalable. SQL db are table based, while NoSQL db are doc, key-value, graph or wide-column stores. SQL db are better for multi-row transactions, while NoSQL is better for unstructured data like doc or JSON.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
            <div className="row mt-3">
                <Card className="text-center">
                    <Card.Header className='bg-info'>4. What is the purpose of jwt and how does it work?</Card.Header>
                    <Card.Body>
                        <Card.Text className='bg-warning'>
                            Ans: JSON Web Token(JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default Blogs;