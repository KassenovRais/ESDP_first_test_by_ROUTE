import React from 'react'
import {  Outlet } from 'react-router-dom'
import {  useAppSelector } from '../../Store/hooks'
import Link from '../Link/Link'
import Anonymous from '../Menus/Anonymous'
import UserTeacher from '../Menus/User.Teacher'
import './Layout.css'

const Layout = () => {

       const user = useAppSelector(state => state.auth.user)
       return (
              <div>

                     <div className='layout' >
                            <Link
                                   to='/'
                                   children='LOGO'
                            />
                            <Link
                                   to='/interactiveTutorials'
                                   children='Интерактивные пособия'
                            />
                            <Link
                                   to='/generator'
                                   children='Генератор Пособий'
                            />
                             <Link
                                   to='/'
                                   children='Виртуальный класс'
                            />
                             <Link
                                   to='/'
                                   children='Скачать'
                            />
                             <Link
                                   to='/'
                                   children='Цены'
                            />
                            <Link
                                   to='/shop'
                                   children='SHOP'
                            />


                            <div
                                   className='fix_Link'
                            >
                                   {
                                          !user ?
                                          <Anonymous/>
                                          :
                                          <UserTeacher/>
                                   }

                            </div>
                     </div>
                     <Outlet/>
              </div>
       )
}

export default Layout