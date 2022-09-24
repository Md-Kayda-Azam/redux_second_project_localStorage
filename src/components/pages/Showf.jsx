import React from 'react';
import { useSelector } from 'react-redux';
import './Showf.scss'

const Showf = () => {

const  single  = useSelector(state => state.signleDev);


    
    

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <img src={single.photo} alt="" />
                    </div>
                    <div className="card-body">
                        <h1>Name : {single.name}</h1>
                        <p> Age : {single.age}</p>
                        <p> Email : {single.email}</p>
                        <p> Cell : {single.cell}</p>     
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showf