import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'

const projects = [
  {
    name: 'Smart Brain',
    img: 'images/smartbrain.png',
    source: 'https://github.com/afraz-malik/smartBrain',
    live: 'https://afraz-malik.github.io/smartBrain/',
  },
  {
    name: 'Skip The Agent',
    img: 'images/skiptheagent.png',
    source: 'https://github.com/afraz-malik/skiptheagent',
    live: 'https://afraz-malik.github.io/skiptheagent/',
  },
  {
    name: 'King Shopping',
    img: 'images/king.png',
    source: 'https://github.com/afraz-malik/king-shopping',
    live: 'https://afraz-malik.github.io/king-shopping/',
  },
  {
    name: 'Optimiz Agents',
    img: 'images/optimiz.png',
    source: 'https://github.com/afraz-malik/optimiz-agents',
    live: 'https://afraz-malik.github.io/optimiz-agents/',
  },
  {
    name: 'Calculator',
    img: 'images/calculator.gif',
    source: 'https://github.com/afraz-malik/calculator',
    live: 'https://afraz-malik.github.io/calculator/',
  },
  {
    name: 'React PHP CRUD',
    img: 'images/faculty.png',
    source: 'https://github.com/afraz-malik/faculty-directory',
    live: 'https://afraz-malik.github.io/faculty-directory/',
  },
  {
    name: 'Robofriends',
    img: 'images/robots.PNG',
    source: 'https://github.com/afraz-malik/robofriends',
    live: 'https://afraz-malik.github.io/robofriends/',
  },
  {
    name: 'Quote Generator',
    img: 'images/quote.png',
    source: 'https://github.com/afraz-malik/quote-generator',
    live: 'https://afraz-malik.github.io/quote-generator/',
  },
  {
    name: 'Responsive CV',
    img: 'images/cv.png',
    source: 'https://github.com/afraz-malik/cv-template',
    live: 'https://afraz-malik.github.io/cv-template/',
  },
]
function Page() {
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
