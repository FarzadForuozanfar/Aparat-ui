import React from 'react'
import { Helmet } from 'react-helmet'
import DashboardLayout from '../../layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <div>
        <Helmet>
            <title>داشبورد | آپارات</title>
        </Helmet>
        <DashboardLayout/>
    </div>
  )
}

export default Dashboard