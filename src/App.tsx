import './App.css'
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home/Home'
import {Settings} from './pages/Settings/Settings'
import { SavedLocations } from './pages/SavedLocations/SavedLocations';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Alerts } from './pages/Alerts/Alerts';
import { useState } from 'react';



function App() {
   const [unit, setUnit] = useState<'C' | 'F'>('C');
 

    return (
    <div>
      <Sidebar unit={unit} setUnit={setUnit}/>
      <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/settings' element= {<Settings />}/>
      <Route path= '/saved-locations' element = {<SavedLocations/>}/>
      <Route path='alerts' element ={<Alerts/>}/>
      </Routes>
    </div>
  );
}
export default App