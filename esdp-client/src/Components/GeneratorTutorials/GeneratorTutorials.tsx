import React from 'react'
import Link from '../Link/Link'
import { Outlet } from 'react-router-dom'
import './GeneratorTutorials.css'


const GeneratorTutorials = () => {
       return (
              <div>
                     <div
                            className='tutorialNavbar'
                     >
                            <Link
                                   to='/generator/mathematics'
                                   children='Математика'
                                   styles='tutorialLink'
                            />
                            <Link
                                   to='/generator/reading'
                                   children='Чтение'
                                   styles='tutorialLink'
                            />
                            <Link
                                   to='/generator'
                                   children='Письмо'
                                   styles='tutorialLink'
                            />

                     </div>
                     <div className='infoTutorialBlock' >
                            <Outlet/>
                     </div>
                     
              </div>
       )
}

export default GeneratorTutorials