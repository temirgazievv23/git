import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'

const Header = (props) => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={`${props.user.avatar_url}`} className="w-20 h-20" alt="" />
          <h4 className="uppercase text-4xl ml-5">{`User name: ${props.user.login}`}</h4>
        </div>
        <div>
          <Link
            to="/"
            className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Main
          </Link>
          {props.repositoryName && (
            <Link
              to={`/${props.userName}`}
              className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Repositories
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header
