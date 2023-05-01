import React, { Fragment } from 'react'
import './Admin.css'
const Admin = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="boxs1">
          <div className="Heading">Admin Dashboard</div>
          <div className="Formbox">
            <form>
              <div className="Name">
                <input type="text" required placeholder='Enter Name' />
              </div>
              <div className="Email">
                <input type="email" required placeholder='Enter Email' />
              </div>
              <div className="Address">
                <input type="text" required placeholder='Enter Address' />
              </div>
            </form>
          </div>
          <button className='ADDED'>Add Employee</button>
        </div>
        <div className="boxs2">
          <div className="search">
            <input 
              type="text"
              required
              placeholder='Search Employees'
               />
          </div>
          
        </div>
      </div>
    </Fragment>
  )
}

export default Admin;
