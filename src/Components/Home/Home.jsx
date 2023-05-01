import React, { Fragment } from 'react'
import './home.css'
const Home = ({user}) => {
    
    const empdata ={
        name:"rohan",
        email:"rohan@gmail.com",
        designation:"Frontend-Developer",
        Address:"surat",
        joiningDate:"24/08/2022"
    }
  return (
    <Fragment>
        <div className="container">
          <div className="box1">
            {/* name:{user.name}
            email:{user.email}
            address:{user.address}
            joinedAt:{user.joinedAt} */}
          </div>
            <div className="box2">
              name:{empdata.name}<br/>
              email:{empdata.email}<br/>
              designation:{empdata.designation}<br/>
              Address:{empdata.Address}<br/>
              joiningDate:{empdata.joiningDate}  
            </div>
        </div>
    </Fragment>
  )
}

export default Home;
