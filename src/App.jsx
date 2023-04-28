import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserList from './components/UserList'
import User from './components/User'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserList/>}/>
      <Route path='/users/:id' element={<User/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App