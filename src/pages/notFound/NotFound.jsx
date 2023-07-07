import React from 'react'
import notFound from "./404-Error.svg"
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import "./NotFound.scss"

const NotFound = () => {
  return(
    <div className='not-found d-flex align-items-center justify-content-center' style={{"flexDirection": "column"}}>
      <img src={notFound} alt="not-found" style={{"max-width": "500px"}}/>
      <h2>.صفحه مورد نظر یافت نشد</h2>
      <Link to={"/"}><Button variant="contained" className='not-found'>بازگشت به خانه</Button></Link>
    </div>
  )
}

export default NotFound;