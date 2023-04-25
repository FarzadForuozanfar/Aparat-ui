import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default DashboardLayout