import React from 'react'
import Draggable from 'react-draggable'
import {useState} from 'react'
type Props = {}

const EditableText = (props: Props) => {
  const [editMode, seteditMode] = useState<boolean>(false);
  const [textMessage, settextMessage] = useState<string>("Enter the text")


  return (
    <Draggable >
      {
        editMode ? 
        <input type="text" placeholder='Enter the text' value={textMessage} 
        autoFocus
        onChange={e=>settextMessage(e.currentTarget.value)}
        onKeyDown={e=>{
          if(e.key === "Enter"){
            seteditMode(false)
          }
        }}
        
        /> :
        <h4  onDoubleClick={()=>seteditMode(true)}  >{textMessage}</h4> 
      }
    </Draggable>
  )
}

export default EditableText