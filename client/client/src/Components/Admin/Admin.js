import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'

function Admin() {

    let [users,setUsers]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/responses/get-data')
    .then(response=>{
      //console.log(response.data)
      setUsers(response.data.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[])

  return (
    <div>
        
      <div className="m-5 p-3">
      <h1 className="text-center text-warning">List of Responses</h1>
        <Table striped bordered hover >
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Answer1</th>
                <th>Answer2</th>
                <th>Answer3</th>
                <th>Answer4</th>
                <th>Answer5</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((item)=>
                <tr>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.Q1}</td>
                <td>{item.Q2}</td>
                <td>{item.Q3}</td>
                <td>{item.Q4}</td>
                <td>{item.Q5}</td>
            </tr>)
            
            }
            
            </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Admin