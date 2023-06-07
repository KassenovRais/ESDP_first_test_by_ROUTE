import React from 'react'
import Link from '../Link/Link'
import './Anonymous.css'

const Anonymous = () => {
       return (
              <div 
                     className='navBar'
              >
                     
                     <Link
                            to='/register'
                            children='РЕГИСТРАЦИЯ'
                     />
                     <Link
                            to='/login'
                            children='ВХОД'
                     />  
              </div>
       )
}

export default Anonymous