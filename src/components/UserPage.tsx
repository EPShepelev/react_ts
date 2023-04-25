import{FC, useEffect, useState} from 'react'
import { IUser } from '../types/types'
import axios from 'axios'
import List from './List'
import UserItem from './UserItem'
import {useNavigate } from 'react-router-dom'

const UserPage:FC = () => {
  // указываем тип данных после useState пишем <IUser[]> именно массив, т.к. ожидаем  массив пользователей
  const [users, setUsers] = useState<IUser[]>([])

  const navigate = useNavigate()

  useEffect(()=>{
    fetchUsers()
  }, [])

  // асинхронная функция для получения списка пользователей
  async function fetchUsers() {
    // для отлавливания ошибок оборачиваем в  try catch
    try {
      // указываем что в ответе на запрос ожидаем массив типа IUser
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }
    catch(e) {
      alert(e)
    }
  }

  return (
    <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) =>  navigate(`/users/${user.id}`)} user={user} key={user.id} />} />
  )
}

export default UserPage
