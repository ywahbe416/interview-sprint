import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/courses'

function CourseDetailPage() {
  const { slug } = useParams()
  const course = courses.find((item) => item.slug === slug)

  if (!course) {
    return (
      <section className="detail-card">
        <h2>Course not found</h2>
        <Link className="back-link" to="/">
          Back to courses
        </Link>
      </section>
    )
  }

  return (
    <section className="detail-card">
      <h2>{course.title}</h2>
      <p className="meta">Estimated time: {course.estimatedTime}</p>

      <h3>Learning objectives</h3>
      <ul>
        {course.objectives.map((objective) => (
          <li key={objective}>{objective}</li>
        ))}
      </ul>

      <button type="button" className="primary-button">
        Start Lesson
      </button>
      <Link className="back-link" to="/">
        Back to all courses
      </Link>
    </section>
  )
}

export default CourseDetailPage
