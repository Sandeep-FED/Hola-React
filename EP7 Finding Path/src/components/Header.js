import React from "react"

// Includes component composition
export const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src="https://play-lh.googleusercontent.com/NgS9RyVy-xRXFso-fK7ouqkpBwusIJ6VKuBsT6dMc9g8dsp4AJPlJKDk1SlKOZkQmO0" width={100} height={95} />
      <div className='menus'>
        <ul>Home</ul>
        <ul>Foods</ul>
        <ul>Restaurants</ul>
        <ul>Help</ul>
      </div>
      <div className='roadLine'></div>
    </div>
  )
}
