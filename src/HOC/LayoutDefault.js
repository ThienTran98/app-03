import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

export default function LayoutDefault({children}) {
  return (
    <div>
        <Header/>
        <div className='h-[700px] w-full'>
            {children}
            </div>
            <Footer/>
    </div>
  )
}
