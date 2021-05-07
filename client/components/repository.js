import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'

const RepoList = (props) => {
  return (
    <div>
      {props.repoList.map((el) => (
        <div key={el.name}>
          <Link to={`/${props.userName}/${el.name}`}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

RepoList.propTypes = {}

export default RepoList
