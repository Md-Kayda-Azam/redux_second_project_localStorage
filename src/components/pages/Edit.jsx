import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Edit = ({index, setEdit}) => {


const dispatch = useDispatch()

const [ input, setInput ] = useState({
    name : '',
    age : '',
    email : '',
    cell : '',
    photo : ''
  })

// state update
const handleInput = (e) => {

  setInput((preState) => ({ ...preState, [e.target.name] : e.target.value}))
  

}



const hanldeEditSubmit = (e) => {
    e.preventDefault()

  let data = localStorage.getItem('devs') ? JSON.parse( localStorage.getItem('devs')) : []
  
  data[index] = {...data[index],  ...input }

  localStorage.setItem('devs', JSON.stringify(data));

  dispatch({type : "DEVS_ADDED", payload : data});

  setEdit(false)


}

  return (
    <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <h3>Devloper Sign-Up</h3>
              <hr />
              <form onSubmit={ hanldeEditSubmit } action="">
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
  )
}

export default Edit