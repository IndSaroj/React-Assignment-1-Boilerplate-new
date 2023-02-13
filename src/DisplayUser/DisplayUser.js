import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function DisplayUser() {

    const navigate = useNavigate();
  
   const [contactarray, setContactarray] = useState([]);
   const [err, setErr] = useState('')
    
   useEffect(() => {
    axios.get('http://localhost:3001/Contacts')
    .then(result=> setContactarray(result.data))
    .catch(error=> setErr(error.message))
   },[])

   const DeleteContact = (id) => {
    
    axios.delete(`http://localhost:3001/contacts/${id}`)
          .then(result => {
            alert('Record deleted');
            navigate('/aboutus')
          })
          .catch(error => setErr(error.message))

  }


   return (

        <div>
            <div className='row'>
                <div className="col-md-8 offset-md-2">
                    <div className="mt-2 text-center bg-dark text-light rounded p-2">
                        <h2>Contact List</h2>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-8 offset-md-2">
                    <div className="alert alert-danger">
                        <span>{err}</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>phone</th>
                                <th>city</th>
                                <th>pincode</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               contactarray.map(data =>
                                   <tr key={data.id}>

                                       <td>{data.fname}</td>
                                       <td>{data.lname}</td>
                                       <td>{data.email}</td>
                                       <td>{data.phone}</td>
                                       <td>{data.city}</td>
                                       <td>{data.pincode}</td>
                                       <td>{data.password}</td>

                                       {/* <td><i onClick={DeleteContact.bind(this,data.id)} className="fa-solid fa-user-minus text-danger"></i></td> */}
                                       <td><button onClick={DeleteContact.bind(this, data.id)} className='btn btn-danger btn-sm'>Delete</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

