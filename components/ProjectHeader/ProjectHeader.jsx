import './ProjectHeader.css'

const ProjectHeader=()=>{
  return(
    <div className="headerImgContainerProject">
      <div className="heroTextProject">
        <h1>Project</h1>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corrupti corporis reiciendis, earum optio voluptatibus sint rem autem.</h3>
      </div>
      <img src="/imgProject.svg" alt="Picture of the author" className="imgHeader"/>

    </div>
  )
}

export default ProjectHeader;