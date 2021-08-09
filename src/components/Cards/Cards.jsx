import CardsCss from './Cards.module.scss'
const Cards = ({ filteredProjects, projects, manageSearch }) => {
  return (
    <div className={CardsCss.container}>
      <div className={CardsCss.help}>
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
      </div>

      <div className={CardsCss.cards}>
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
