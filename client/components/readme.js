import React from 'react'
import Markdown from 'markdown-to-jsx'
import './readme.scss'
import '../assets/scss/main.scss'

const Readme = (props) => {
  return <Markdown className="markdown-body">{props.readme}</Markdown>
}

Readme.propTypes = {}

export default Readme
