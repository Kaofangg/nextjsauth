"use client";
import Image from 'next/image'
//import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <html>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
         ></link>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/singin">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </body>
    </html> 
    <h1>Hello Monkey_Man</h1>
    </>
  )
  
}
