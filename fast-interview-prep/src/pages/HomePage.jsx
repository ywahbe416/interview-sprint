import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

function HomePage() {
  return (
    <section>
      <h2 className="section-title">Core DSA Courses</h2>
      <p className="section-subtitle">Pick a topic to view lesson details and jump in quickly.</p>
      <div className="cards-grid">
        {courses.map((course) => (
          <Link key={course.slug} to={`/course/${course.slug}`} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.estimatedTime}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage
