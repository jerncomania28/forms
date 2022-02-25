import React from 'react'
import Form from './components/Form'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEye  , faEyeSlash} from '@fortawesome/free-solid-svg-icons'


library.add(faEye , faEyeSlash)


function App() {
  return (
    <div className='container'>
     
     <Form /> 

    </div>
  )
}

export default App