import axios from 'axios'
import {FC, useEffect, useState} from 'react'
import { IUser } from '../types/types'
import { useParams, useNavigate } from 'react-router-dom'


const UserItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
      fetchUser()
    }, [])
  
    // асинхронная функция для получения списка пользователей
    async function fetchUser() {
      // для отлавливания ошибок оборачиваем в  try catch
      try {
        // указываем что в ответе на запрос ожидаем массив типа IUser
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(response.data)
      }
      catch(e) {
        alert(e)
      }
    }

  return (
    <div>
      <button onClick={() =>  navigate('/users')}>Назад</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>проживает в городе {user?.address.city} на улице {user?.address.street}</div>
    </div>
  )
}

export default UserItemPage
