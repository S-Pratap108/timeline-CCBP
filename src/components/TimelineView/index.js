import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const itemList = []
  timelineItemsList.map(eachItem => itemList.push({title: eachItem.title}))
  console.log(itemList)

  return (
    <div className="page-bg">
      <h1 className="my">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <div className="timeline-cont">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={itemList}
          theme={{
            primary: '#171f46',
            secondary: '#ffffff',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachContent => {
            const {categoryId} = eachContent
            if (categoryId === 'COURSE') {
              return (
                <CourseTimelineCard key={eachContent.id} data={eachContent} />
              )
            }
            return (
              <ProjectTimelineCard key={eachContent.id} data={eachContent} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
