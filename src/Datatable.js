import React, { useContext } from 'react'
import {UserContext} from './App.js'

function Datatable() {
    const user=useContext(UserContext);
    console.log(user);
  return (
  <table>
    <thead>
        <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>mobile</th>
            <th>DOB</th>
            <th>location</th>
           
        </tr>
    </thead>
    <tbody>
        {user.map((item) =>(
            <tr  key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>{item.dob}</td>
            <td>{item.location}</td>
           
            </tr>
        ))}
    </tbody>
  </table>
  )
}

export default Datatable