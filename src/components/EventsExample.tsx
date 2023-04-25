import {FC, useState, useRef} from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

                                            // как дженерик укзывается какой именно элемент мы слушаем
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
                                            // как дженерик укзывается какой именно элемент мы слушаем
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("значение из управляемого", value)
        console.log("значение из НЕ управляемого",inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }
   
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandlder = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

  return (
    <div>
      <input value={value} onChange={changeHandler} type='text'></input>
      <input ref={inputRef} type='text' placeholder='неуправляемый инпут'></input>
      <button onClick={clickHandler}>press</button>
      <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', backgroundColor: 'lime', marginTop: '20px'}}></div>
      <div 
        onDrop={dropHandler} 
        onDragLeave={leaveHandlder} 
        onDragOver={dragWithPreventHandler}
        style={{width: '200px', height: '200px', backgroundColor: isDrag ? 'tomato' : 'lime', marginTop: '20px'}}></div>
    </div>
  )
}

export default EventsExample
