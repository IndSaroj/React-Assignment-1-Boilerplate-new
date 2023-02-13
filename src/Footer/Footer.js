import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
      <div>
          <div className="container-fluid">
              <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top collapse navbar-collapse">
                  <p className="col-md-4 mb-0 text-muted"> &copy; 2022 Company, Inc</p>

                  <ul className="nav col-md-4 justify-content-end">
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/adduser"> Add User </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/contactus"> Contact Us </Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/displayuser"> Display User </Link>
                      </li>
                  </ul>
              </footer>
          </div>
      </div>
  )
}
