import { BrowserRouter, Routes, Route,  Link } from 'react-router-dom'
import UserPage from './components/UserPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'

const App = () => {


  return (
    <BrowserRouter >
    <div>
     <div>
      <Link to='/users'>Пользователи</Link>
      <Link to='/todos'>Список дел</Link>
     </div>
      <Routes>
        <Route path={'/users'} element={<UserPage />} />
        <Route path={'/todos'} element={<TodosPage />} />
        <Route path={'/users/:id'} element={<UserItemPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
