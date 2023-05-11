import React from "react"
import { Link, Outlet } from "react-router-dom"

function Nav() {
  return (
    <div>
      <>
        <main>
          <Outlet />
        </main>
        <nav>
          <ul>
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
              <Link to={"/displaylog"}>Display Log</Link>
            </li>
          </ul>
        </nav>
      </>
    </div>
  )
}

export default Nav
