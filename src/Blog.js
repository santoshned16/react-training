import React, { useState, useEffect } from "react";
import {Container, Table} from 'react-bootstrap';

function Blog() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((data) =>  {
            data.json().then( (result) => {
              setPosts(result);
            })
          })

      }, []);
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Post id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map( ( post, index ) => {
              return (<tr key={index}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>@{post.body}</td>
              </tr>)
            })
          }
          
        </tbody>
      </Table>
     </Container> 
  );
}

export default Blog;
