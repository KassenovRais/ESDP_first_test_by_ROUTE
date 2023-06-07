import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import './Link.css'

interface ILink {
       to:string
       children:ReactNode
       styles?:string
}

const Link = ({children , to , styles = ''}:ILink) => {
       return (
             <NavLink
                     className={({isActive}) => isActive? `actine link ${styles}` : `deactine link ${styles}`}
                     to={to}
                     children={children}

             />
       )
}

export default Link