import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import "./Header.module.scss"
import headerStyles from "./Header.module.scss"

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <div className={headerStyles.navlinks}>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/"
        >
          Home
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/blog"
        >
          Blogs
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/about"
        >
          About
        </Link>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

export default Header
