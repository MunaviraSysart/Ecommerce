import React from 'react';
import { Button } from 'react-bootstrap';
import { Input } from 'reactstrap';

export const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='text-center'>Keep In Touch</h1>
                <div className='feeback'>
                    <Input type='text' className="mb-3" placeholder='Enter your email'></Input>
                    <Input type='textarea' className="mb-3" placeholder='Enter your feedback'></Input>
                    <Button variant="outline-primary" >Submit</Button>
                </div>
        </div>
    )
}
