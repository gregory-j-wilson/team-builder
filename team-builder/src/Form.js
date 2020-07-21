import React, {useState} from 'react';
import './App.css'
import './App'


function Form (props) {

    const { teamMember, update, submit } = props

    const handleChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        
        submit()
    }

    

    return (
        <div><h1>Add A Team Member:</h1>
        <div className='formbox'>
        <form onSubmit={onSubmit}> 
            <label htmlFor='name'>Name:</label>
            <input
                id='name'
                name='name'
                placeholder='Enter name here'
                maxLength='30'
                type='text'
                value={teamMember.name}
                onChange={handleChange}
            
            />
            <br></br>
            <label htmlFor='email'>Email:</label>
            <input 
                id='email'
                name='email'
                placeholder='Enter email here'
                maxLength='30'
                type='email'
                value={teamMember.email}
                onChange={handleChange}
            />
            <br></br>
            <label>Role:</label>
            <select name='role' value={teamMember.role} onChange={handleChange}>
                <option value=''>Select a Role...</option>
                <option value='ui designer'>UI Designer</option>
                <option value='ux designer'>UX Designer</option>
                <option value='frontend'>Frontend</option>
                <option value='backend'>Backend</option>
            </select>
            <br></br>
            <button>Submit!</button>
            
        </form>
        </div>
        </div>
    )
}


export default Form