import {FC} from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div>
      <div onClick={() => onClick(user)} style={{padding: '10px', border: '1px solid lime'}}>
            {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    </div>
  )
}

export default UserItem
