import { useState } from 'react'
import NavBar from './components/nav'
import Hero from './components/hero'
import Sidebar from './components/sideNav'
import Dashboard from './components/main'
import PlantesDashboard from './components/planteDashboard'
import Register from './components/register'
import AddPlantForm from './components/insertPlant'

import './App.css'
import './index.css'
import Main from './components/main'


function App() {
  return (
<div className="flex">
  <Register/>
  {/* <Sidebar /> */}
  <PlantesDashboard/>
  {/* <NavBar/>
  <Hero/> */}
  
  
  {/* <Main /> */}
</div>

)
}
export default App
