import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Search } from './components/Search/Search'
import { WeatherHero } from './components/WeatherHero/WeatherHero'
// import { Route } from 'react-router-dom'

function App() {
  
  const [searchQuery, setSearchQuery] = useState<string>('')
  
 const onSearch=(newValue: string)=>{
  setSearchQuery(newValue)
 }
 

  return (
    <>
    <Sidebar />
     <Search searchQuery={searchQuery} onSearch={onSearch}/>
     <WeatherHero />
    
    
    
    </>
  )
}

export default App
