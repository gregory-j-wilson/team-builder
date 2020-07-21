import React, {useState} from 'react';
import './App.css';
import Form from './Form'
import { v4 as uuid } from 'uuid'


const initialTeamMembers = []


const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamMembers })
}
const fakeAxiosPost = (url, { name, email, role }) => {
  const newMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}


function App() {

  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  })

  const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }

  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembers) 



  const createMember = (inputName, inputValue) => {
      const newMember = { ...teamMember, [inputName]: inputValue }
      setTeamMember(newMember)
  }

  const submitForm = () => {

    const newMember = {
      name: teamMember.name.trim(),
      email: teamMember.email.trim(),
      role: teamMember.role,
    }

    if (!newMember.name || !newMember.email || !newMember.role) return

    fakeAxiosPost('fakeapi.com', newMember)
      .then(res => {
    
        const memberFromAPI = res.data
        setTeamMembersList([memberFromAPI, ...teamMembersList])
    
        setTeamMember(initialFormValues)
      })
  }


  // const handleChange = event => {
  //   setTeamMember({ ...teamMember, [event.target.name]: event.target.value})
  // }

  // const handleSubmit = event => {
  //   event.preventDefault();
  // }

  


  return (
    <div className="App">
        <Form 
          teamMember={teamMember}
          update={createMember}
          submit={submitForm}
        />
       {teamMembersList.map( member => {
          return (
            <div key={member.id}>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.role}</p>
            </div>
          )
       })}
    </div>
  );
}

export default App;
