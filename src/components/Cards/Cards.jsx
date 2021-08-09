import CardsCss from './Cards.module.scss'
const Cards = ({ filteredProjects, projects, manageSearch }) => {
  const closeNav = () => {
    document.getElementById('mySidebar').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
  }
  return (
    <div className={CardsCss.container}>
      {/* <div className={CardsCss.help}>
        <div className={CardsCss.sidebar}>
          <h4 href="">Projects Name</h4>
          {projects.map((el) => (
            <span
              onClick={() => manageSearch(el.name)}
              key={el.name}
              href="#home"
            >
              {el.name}
            </span>
          ))}
        </div>
      </div> */}
      <div id="mySidebar" className={CardsCss.newsidebar}>
        <h3>All Projects</h3>
        <a
          href="javascript:void(0)"
          className={CardsCss.closebtn}
          onClick={() => closeNav()}
        >
          ×
        </a>
        <hr />
        {projects.map((el) => (
          <a
            href="javascript:void(0)"
            onClick={() => manageSearch(el.name)}
            key={el.name}
          >
            {el.name}
          </a>
        ))}
      </div>

      <div className={CardsCss.cards} id="main">
        {filteredProjects.map((el) => (
          <div className={`${CardsCss.card} grow `}>
            <img src={`${el.img}`} alt="smartBrain" />
            <div className={CardsCss.hover}>
              <div className={CardsCss.title}> {el.name}</div>
              <div className={CardsCss.a}>
                <a href={el.live} rel="noreferrer" target="_blank">
                  See Live
                </a>
                <a href={el.source} rel="noreferrer" target="_blank">
                  Souce Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
