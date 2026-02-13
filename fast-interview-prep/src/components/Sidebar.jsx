import { NavLink } from 'react-router-dom'
import { categories } from '../data/courses'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">Learn Fast</div>
      <nav className="sidebar-nav">
        {categories.map((category) => {
          const target = category === 'Progress' ? '/progress' : '/'

          return (
            <NavLink
              key={category}
              to={target}
              className={({ isActive }) =>
                `sidebar-link ${isActive && target !== '/' ? 'active' : ''}`
              }
            >
              {category}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
