import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDevs } from '../../redux/Devs/action';
import './Page.scss';
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import Modal from 'react-bootstrap/Modal';
import Showf from './Showf';
import Edit from './Edit';




const Page = () => {

const [show, setShow] = useState(false);
const [edit, setEdit] = useState(false);

const [ index, setIndex] = useState();



  const [ input, setInput ] = useState({
    name : '',
    age : '',
    email : '',
    cell : '',
    photo : ''
  })

const dispatch = useDispatch();

const  {devs}  = useSelector(state => state.devs)



  // state update
  const handleInput = (e) => {

    setInput((preState) => ({ ...preState, [e.target.name] : e.target.value}))
    

  }


  // delete devs 
  const handledeletedevs = (index) => {
     
    let data = localStorage.getItem('devs') ? JSON.parse(localStorage.getItem('devs')) : [];

    data.splice(index, 1)

    localStorage.setItem('devs', JSON.stringify(data));

    dispatch({type : "DEVS_ADDED", payload : data});

  }


  /// show devs
  const handleShowdevs = (index) => {

    setShow(true)
    
    dispatch({type : "SINGLE_DEV", payload : devs[index]})



  }

  // edit devs
  const handleEditDevs = (index) => {

    setEdit(true);

    setIndex(index)

  }
  // form submit
  const hanldeFormSubmit = (e) => {
    e.preventDefault()

    dispatch(createDevs(input))

    setInput({
      name : '',
      age : '',
      email : '',
      cell : '',
      photo : ''
   })

  }


  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h1>Developer list</h1>
              <hr />
              <table className='table talbe-striped'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Cell</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    devs.map( (data, index) => 
                      <tr>
                        <td>1</td>
                        <td>{data.name}</td>
                        <td>{data.age}</td>
                        <td>{data.email}</td>
                        <td>{data.cell}</td>
                        <td><img src={data.photo} alt="" /></td>
                        <td>
                          <button id='show' onClick={() => handleShowdevs(index)} ><GrView/></button>
                          <button id='edit' onClick={() => handleEditDevs(index)}><BiEdit/></button>
                          <button id='delete' onClick={() => handledeletedevs(index)} ><MdDelete/></button>
                        </td>
                    </tr>
                      )
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3>Devloper Sign-Up</h3>
              <hr />
              <form onSubmit={ hanldeFormSubmit } action="">
                <div className="my-3">
                <label htmlFor="Name">Name</label>
                <input name='name' type="text"  value={ input.name } onChange={ handleInput } className="form-control"/>
                </div>
                <div className="my-3">
                <label htmlFor="Age">Age</label>
                <input name='age' type="text"  value={ input.age } onChange={ handleInput }  className="form-control"/>
                </div>
                <div className="my-3">
                <label htmlFor="Email">Email</label>
                <input  name='email' type="text" value={ input.email } onChange={ handleInput }  className="form-control"/>
                </div>
                <div className="my-3">
                <label htmlFor="Cell">Cell</label>
                <input name='cell'  type="text" value={ input.cell } onChange={ handleInput }  className="form-control"/>
                </div>
                <div className="my-3">
                <label htmlFor="Cell">Photo link</label>
                <input name='photo'  type="text" value={ input.photo } onChange={ handleInput }  className="form-control"/>
                </div>
                   <button className='btn btn-primary w-100'>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal
      show={show}
      onHide={() => setShow(false)}
      >
       <Showf/>
      </Modal>
      
      <Modal
      show={edit}
      onHide={() => setEdit(false)}
      >
       <Edit setEdit = {setEdit} index = {index}/>
      </Modal>
    </div>
  )
}

export default Page