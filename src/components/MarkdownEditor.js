import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownEditor = ({rawMarkDown}) => {
  return (
    <div>
        <ReactMarkdown>{rawMarkDown}</ReactMarkdown>
    </div>
  )
}

export default MarkdownEditor