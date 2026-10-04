import React, { useEffect, useState } from 'react'
import MarkdownEditor from './MarkdownEditor'


const App = () => {

    const [markDown, setMarkDown] = useState("# Markdown Title\n\nStart typing...")

    const onRawMarkDown = (e)=>{
        setMarkDown(e.target.value)
    }

    useEffect(()=>{
       
    },[markDown])

  return (
    <div style={{display:'flex', gap:'30px', padding:'20px', height:'20vh'}}>
        <section style={{flex:1, width:'50%',}}>
            <h3>Editor</h3>
            <textarea value={markDown} onChange={onRawMarkDown}
            style={{width:"100%", height:'100%', padding:'10px', backgroundColor:'#f5f5f5'}}></textarea>
        </section>
        <section style={{flex:1, width:'50%', height:'100vh', padding:'30px',backgroundColor: '#711e1e8e', fontFamily:'monospace',}}>
            <h3>Preview</h3>
            <MarkdownEditor rawMarkDown={markDown}/>
        </section>
    </div>
  )
}

export default App