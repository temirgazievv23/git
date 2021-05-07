import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import RepoList from './repository'
import Readme from './readme'
import Header from './header-user'
import '../assets/scss/main.scss'

const Home = () => {
  const [readme, setReadme] = useState('')
  const [repoList, setRepoList] = useState([])
  const [user, setUser] = useState([])
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    if (typeof repositoryName !== 'undefined') {
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }).then(({ data }) => setReadme(data))
    }
  }, [repositoryName, userName])

  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  return (
    <div className="bg-gray-300 min-h-screen">
      <Header repositoryName={repositoryName} userName={userName} user={user} />
      <div className="container mx-auto py-20">
        <Route
          exact
          path="/:userName"
          component={() => <RepoList repoList={repoList} userName={userName} />}
        />
        <Route
          exact
          path="/:userName/:repositoryName"
          component={() => <Readme readme={readme} />}
        />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
