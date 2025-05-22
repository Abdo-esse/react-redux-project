import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create';
import Update from './Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/creat" element={<Create/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App

