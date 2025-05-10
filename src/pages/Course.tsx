import React from 'react'
import { useParams } from 'react-router'

function Course() {
    const {id, slug} = useParams();
  return (
    <div>
        
      Course {id}, slug is: {slug}
    </div>
  )
}

export default Course
