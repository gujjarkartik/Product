import React from 'react'
import golu from './Man.jpg'
export default function comp() {
  return (
    <div>
      <div id="logo"><a href="#"><img src={golu} style={{width:"15rem"}}/></a></div>
      <div className="top-divider"></div>
        <div className="content">
            <h2>John Doe</h2>
            <h3>Frontend Developer</h3>
            <p>I am good in HTML,CSS and JavaScript.</p>
    </div>
    </div>
  )
}
