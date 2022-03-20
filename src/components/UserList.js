import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'

export const UserList = () => {
  return (
    <ListGroup className='mt-4'>
      <ListGroupItem className='d-flex justify-content-between'>
        <strong>User One</strong>
        <div className='ml-auto'>
          <Link to='/edit/1' className='btn btn-warning mr-2'>Edit</Link>
          <Button color='danger'>Delete</Button>
        </div>
      </ListGroupItem>
      <ListGroupItem className='d-flex justify-content-between'>
        <strong>User Two</strong>
        <div className='ml-auto'>
          <Link to='/edit/2' className='btn btn-warning mr-2'>Edit</Link>
          <Button color='danger'>Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}
