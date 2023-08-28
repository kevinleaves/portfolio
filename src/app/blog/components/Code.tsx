'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  node: {
    _type: 'code'
    language: string
    highlightedLines: Array<Number>
    code: string
    filename?: string
  }
}

export default function Code({ node }: Props) {
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
