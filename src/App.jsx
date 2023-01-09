import { useState } from 'react';
import { marked } from 'marked';
import './App.css'


export default function App() {
  const [text, setText] = useState(`
  # H1
  
  ## H2
  
  [title](https://www.example.com)
  
  \`code\`
  
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  
  - First item
  - Second item
  - Third item
  
  > blockquote

  ![alt text](image.jpg)

  **bold text**
  
  `);
  
  marked.setOptions({
    breaks: true
  })
    return (
    <main className='main' >
      <div className='divText'>
        <textarea 
        id="editor" 
        onChange={(e) => { setText(e.target.value) }}
        value={text}
        >
        </textarea>
      </div>

      <div className='divPreview' id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text)
      }}
      ></div>
    </main>
  )
}
