import { DragEvent, DragEventHandler, useRef, useState,MouseEvent } from 'react'
import './App.css'
import Draggable, { DraggableCore } from 'react-draggable';
import EditableText from './components/editable-text';

function App() {
  const [positionX, setpositionX] = useState(0)
  const [positionY, setpositionY] = useState(0)
  const [count, setCount] = useState<number>(0)
  const ContainerRef = useRef<HTMLDivElement>(null) 
  const [textMessage, settextMessage] = useState<string>("Enter the text")


const createNewText = (e:MouseEvent<HTMLButtonElement>)=>{
  console.log(e)
  setCount(count+1);

}
  return (
    <>
    <div style={{backgroundColor:"red",height:"100vh",width:"100vw"}} id='container' ref={ContainerRef} >
      {
        Array(count).fill(0).map(()=><EditableText/>)
      }
    <div className='menu'>
      <button onClick={createNewText}>Add Text</button>
    </div>
   
    </div>
  </>
  )
}

export default App
