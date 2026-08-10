import './App.css'
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home/Home'
import {Settings} from './pages/Settings/Settings'
import { SavedLocations } from './pages/SavedLocations/SavedLocations';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Alerts } from './pages/Alerts/Alerts';



function App() {
 

    return (
    <div>
      <Sidebar />
      <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/settings' element= {<Settings/>}/>
      <Route path= '/saved-locations' element = {<SavedLocations/>}/>
      <Route path='alerts' element ={<Alerts/>}/>
      </Routes>
    </div>
  );
}
export default App