import React from 'react'
import { PageWrapper } from '../registration/resgistration.styled'
import { Button } from 'react-bootstrap'
import Table from './components/table.component'
import UserTable from './components/table.component'

function DashboardDetails() {
  return (
    <PageWrapper>
      <h3 className='text-center p-3'> User Details</h3>
      <UserTable/>
    </PageWrapper>
  )
}

export default DashboardDetails