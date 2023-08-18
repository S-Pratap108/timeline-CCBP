import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = data
  return (
    <div>
      <img src={imageUrl} alt="project" className="img" />
      <div className="hdg-duration-cont">
        <h1>{projectTitle}</h1>
        <div className="duration-cont">
          <AiFillCalendar />
          <p> {duration} </p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
