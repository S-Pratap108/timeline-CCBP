import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CouseTimelineCard = props => {
  const {data} = props
  const {courseTitle, duration, description, tagsList} = data

  return (
    <div>
      <div className="hdg-duration-cont">
        <h1 className="hdg">{courseTitle}</h1>
        <div className="duration-cont">
          <AiFillClockCircle />
          <p> {duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div>
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="tag-cont">
            <p className="tag">{eachTag.name}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default CouseTimelineCard
