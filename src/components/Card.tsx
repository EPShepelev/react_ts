import React, {FC, PropsWithChildren} from 'react'

export enum CurdVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string
    height: string
    // вместо постоянного указания children указываем тип компонента React.FC children?: React.ReactNode
    // в реакт 18 children не существует в FC, надо снова указывать, либо через PropsWithChildren
    variant: CurdVariant
    onClick: () => void
}

const Card: FC<PropsWithChildren<CardProps>> = ({width, height, children, variant, onClick}) => {
  return (
    <div 
    style={{width, height, background: variant === CurdVariant.primary ? 'tomato' : 'yellow', border: variant === CurdVariant.outlined ? '2px solid aqua' : 'none'}}
    onClick={onClick}
    >
        {children}
    </div>
  )
}

export default Card
