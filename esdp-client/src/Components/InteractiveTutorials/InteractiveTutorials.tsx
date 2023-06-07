import React from 'react'
import {  Outlet } from 'react-router-dom'
import Link from '../Link/Link'
import './InteractiveTutorials.css'

const InteractiveTutorials = () => {
       return (
             <>
                     <div className='tutorialNavbar'>
                            <Link
                                   to='/interactiveTutorials/createInteractiveTutorials'
                                   children='Cоздать'
                                   styles='tutorialLink'
                            />
                            <Link
                                   to='/interactiveTutorials'
                                   children='Пример'
                                   styles='tutorialLink'
                            />
                     
                            
                     </div>
                     <div className='infoTutorialBlock' >
                            <Outlet/>
                     </div>
             </>
       )
}

export default InteractiveTutorials