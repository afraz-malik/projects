import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'

const projects = [
  {
    name: 'Smart Brain',
    img: 'images/smartbrain.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    name: 'Skip The Agent',
    img: 'images/skiptheagent.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    name: 'King Clothing',
    img: 'images/king.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    name: 'Optimiz Agents',
    img: 'images/optimiz.png',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    name: 'Calculator',
    img: 'images/calculator.gif',
    source: 'https://www.google.com',
    live: 'https://www.google.com',
  },
  {
    name: 'React PHP CRUD',
    img: 'images/faculty.png',
    source: 'https://github.com/afraz-malik/faculty-directory',
    live: 'https://afraz-malik.github.io/faculty-directory/',
  },
  {
    name: 'Robofriends',
    img: 'images/robots.png',
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
