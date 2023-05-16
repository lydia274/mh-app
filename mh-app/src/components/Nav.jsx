import React from "react"
import { Link, Outlet } from "react-router-dom"

function Nav() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <nav className="nav-box">
        <ul className="flex menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/browse"}>Browse</Link>
          </li>
          <li>
            <Link to={"/log"}>Log</Link>
          </li>
          <li>
            <Link to={"/displaylog"}>Display log</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
