import { DragEvent, DragEventHandler, useRef, useState } from 'react'
import './App.css'
import Draggable, { DraggableCore } from 'react-draggable';

function App() {
  const [count, setCount] = useState(0);
  const [editMode, seteditMode] = useState<boolean>(false);
  const [positionX, setpositionX] = useState(0)
  const [positionY, setpositionY] = useState(0)
  const textRef = useRef<HTMLHeadingElement>(null) 
  const [textMessage, settextMessage] = useState<string>("Enter the text")



  return (
    <>
    <div style={{backgroundColor:"red",height:"100vh"}} >
    <h1>Create your meme</h1>

    <Draggable>
      {
        editMode ? 
        <input type="text" placeholder='Enter the text' value={textMessage} 
        autoFocus
        onChange={e=>settextMessage(e.currentTarget.value)}
        onKeyDown={e=>{
          console.log(e)
          if(e.key === "Enter"){
            seteditMode(false)
          }
        }}
        
        /> :
        <h4  onDoubleClick={()=>seteditMode(true)}  >{textMessage}</h4> 
 
      }
    </Draggable>
    </div>
   
  </>
  )
}

export default App
