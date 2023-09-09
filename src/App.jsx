import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Signup from './Auth/Signup'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
