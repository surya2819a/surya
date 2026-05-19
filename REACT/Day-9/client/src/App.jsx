import {Route,Routes} from "react-router-dom"
import NavBar from "./components/NavBar"
import ArrayLoopMap from "./components/pages/ArrayLoopMap"
import EffectProcess from "./components/pages/EffectProcess"
import FormHandling from "./components/pages/FormHandling"

const App = () => {
  return (
  <>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ArrayLoopMap/>}/>
    <Route path="Effect" element={<EffectProcess/>}/>
    <Route path="Form" element={<FormHandling/>}/>

  </Routes>
  
  </>

  )
}

export default App