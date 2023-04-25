import{FC, useEffect, useState} from 'react'
import { ITodo } from '../types/types'
import axios from 'axios'
import List from './List'
import TodoItem from './TodoItem'

const TodosPage:FC = () => {
  // указываем тип данных после useState пишем <ITodo[]> именно массив, т.к. ожидаем  массив пользователей
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(()=>{
    fetchTodos()
  }, [])

  // асинхронная функция для получения списка дел
  async function fetchTodos() {
    // для отлавливания ошибок оборачиваем в  try catch
    try {
      // указываем что в ответе на запрос ожидаем массив типа IUser (10 штук)
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    }
    catch(e) {
      alert(e)
    }
  }

  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
  )
}

export default TodosPage
