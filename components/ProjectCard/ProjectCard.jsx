import './ProjectCard.css'

const ProjectCard = ({title, img, body})=>{
  return(
      <div className="cardContent">
        <div className="cardLeft">
          <div className="decorationCard1">{/*Component kosong Jangan Dihapus */}</div>
            <img
                src={img}
                alt="Picture of the author"
            />
        </div>
        <div className="cardRight">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
      </div>
  )
}

export default ProjectCard;