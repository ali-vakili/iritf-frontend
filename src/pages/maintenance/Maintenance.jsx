import React from 'react'
import maintenance from "./Maintenance-bro.svg"
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import "./Maintenance.scss"

const Maintenance = () => {
  return(
    <div className='under-maintenance d-flex align-items-center justify-content-center mb-5' style={{"flexDirection": "column"}}>
      <img src={maintenance} alt="maintenance" style={{"max-width": "500px"}}/>
      <h2>!سایت در حال تعمیر است</h2>
      <Link to={"/"}><Button variant="contained" className='under-maintenance'>بازگشت به خانه</Button></Link>
    </div>
  )
}

export default Maintenance;