import React from 'react'

interface ListProps<T> {
    // массив элементов любого типа 
    items: T[]
    // элемент, который необходимо отрисовать (функция которая возвращает реакт ноду)
    renderItem: (item: T) => React.ReactNode
}

// универсальный компонент лист, для отображения списка чего-либо
// не стрелочная функция!
export default function List<T> (props: ListProps<T>) {
  return (
    <div>
        {/* передем в качестве callback функцию renderItem которая и отрисует элементы */}
      {props.items.map(props.renderItem)}
    </div>
  )
}


