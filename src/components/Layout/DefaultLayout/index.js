import React from 'react'

import Header from '~/components/Layout/components/Header'
import Sidebar from './Sidebar'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Header></Header>
        <div className='container'>
        <Sidebar></Sidebar>
        <div className='content'> {children} </div>
        </div>
    </div>
  )
}

export default DefaultLayout