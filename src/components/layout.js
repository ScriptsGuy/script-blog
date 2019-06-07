import React from "react"
import { Link } from "gatsby"
import Typed from "react-typed"

import "font-awesome/css/font-awesome.min.css"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.2),
            fontFamily: `Cairo, sans-serif`,

            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <Typed strings={[title]} typeSpeed={100} />
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Cairo, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <Typed strings={[title]} typeSpeed={40} />
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main dir="rtl">{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()} Made with love{" "}
            <i
              style={{
                color: "red",
              }}
              className="fa fa-heart"
            />{" "}
            in Algeria
          </p>
        </footer>
      </div>
    )
  }
}

export default Layout
