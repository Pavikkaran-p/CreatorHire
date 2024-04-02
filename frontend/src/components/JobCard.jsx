import React from 'react'
import image from '../assets/img.jpg'
import { Link } from 'react-router-dom'
const JobCard = ({data}) => {
    // console.log(data)
  return (
    <>
      <Link to={`/jobs/${data.id}`}>
        <div className='m-4 flex'>
          <div className='bg-white p-2 rounded-2xl shadow-2xl '>
              <img className='px-3 m-2 w-25 h-25 rounded-3xl' src={image} alt="no img" />
              <h3>{data.title}</h3>
              <h3>{data.time}</h3>
              <h3>{data.foundedIn}</h3>
              <h3>{data.empCount}</h3>
              {/* <FontAwesomeIcon icon="fa-thin fa-business-time" style={{color: "#0f0f0f",}} /> */}
              <h3>{data.tags}</h3>
          </div>
        </div>
      </Link>
    </>
  )
}

export default JobCard