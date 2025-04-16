import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/nav'
import Hero from './components/hero'
import Sidebar from './components/sideNav'
import Dashboard from './components/main'
import PlantesDashboard from './components/planteDashboard'
import Register from './components/register'
import AddPlantForm from './components/insertPlant'

import './App.css'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page with Nav + Hero */}
        <Route path="/" element={
          <>
            <NavBar />
            <Hero />
          </>
        } />

        {/* Dashboard page with Sidebar + Main */}
        <Route path="/dashboard" element={
          <div className="flex">
            <Sidebar />
            <Dashboard />
          </div>
        } />

        {/* Other routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/plants" element={<PlantesDashboard />} />
        <Route path="/add-plant" element={<AddPlantForm />} />

        {/* 404 Fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
