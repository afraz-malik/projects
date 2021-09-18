import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import { getDatas } from './firebase.config'

function Page() {
  const [projects, setstate] = useState([])
  useEffect(() => {
    getDatas().then((res) => setstate(res))
  }, [])

  const [search, setsearch] = useState({ value: '' })
  const manageSearch = (event) => {
    setsearch({ ...search, value: event })
    document.getElementById('mySidebar').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
  }
  const clearSearch = () => {
    setsearch({ value: '' })
  }
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.value.toLowerCase())
  )
  return (
    <>
      <Navbar
        manageSearch={manageSearch}
        search={search.value}
        clearSearch={clearSearch}
      />
      <Cards
        filteredProjects={filteredProjects}
        projects={projects}
        manageSearch={manageSearch}
      />
    </>
  )
}

export default Page
