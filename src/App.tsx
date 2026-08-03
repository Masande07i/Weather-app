import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Search } from './components/Search/Search'
import { Route } from 'react-router-dom'

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  
 const onSearch=(newValue: string)=>{
  setSearchQuery(newValue)
 }
 

  return (
    <>
    <Navbar />
     <Search searchQuery={searchQuery} onSearch={onSearch}/>
     <Route>
      <Route path='saved-location' />
          <Route path='settings'/>
      </Route>
    
    </>
  )
}

export default App
