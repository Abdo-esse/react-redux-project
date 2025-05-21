import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/creat" element={<Create/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App

