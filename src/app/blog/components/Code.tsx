'use client'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Code({ node }) {
  console.log(node, 'node')
  if (!node || !node.code) {
    return null
  }
  const { language, code } = node
  return (
    <SyntaxHighlighter language={language} style={atomOneDark}>
      {code}
    </SyntaxHighlighter>
  )
}
