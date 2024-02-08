import React from 'react'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import Topbar from '../../componentes/Sidebar/Topbar/Topbar'
// import WaterDropGrid from '../../componentes/WaterDropGrid/WaterDropGrid'
import Welcome from '../../componentes/Welcome/Welcome'
const Landing = () => {
  return (
    <div className='bg-gray-800'>
      
        <Topbar />
        <Sidebar />
        <div className='max-w-screen-lg mx-auto p-4'>
        <Welcome />
        {/* <WaterDropGrid /> */}
        </div>
    </div>
  )
}

export default Landing
