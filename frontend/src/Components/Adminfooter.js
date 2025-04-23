import React from 'react'

const Adminfooter = () => {

    const gradientText = {
        background: 'linear-gradient(90deg, #00f260, #0575e6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };

  return (
    <>
    <div className='container-fluid pt-3 pb-2' style={{ backgroundColor: 'rgba(51,51,56,1)' }}  >
    <nav className="navbar navbar-light bg-transparent navbar-expand-lg py-3">
          <h6 className="ms-4 mb-3" style={gradientText}>© 2025 ElectroCart. All rights reserved.</h6>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#dog"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-lg-end" id="dog">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item ms-3">
                <a className="nav-link" href='/' style={gradientText}>
                  <h4>Follow us</h4>
                </a>
              </li>
              <li className="nav-item ms-3"><i className="fa-brands fa-instagram fa-lg nav-link" style={gradientText}></i></li>
              <li className="nav-item ms-3"><i className="fa-brands fa-pinterest-p fa-lg nav-link" style={gradientText} ></i></li>
              <li className="nav-item ms-3 me-3"><i className="fa-brands fa-x-twitter fa-lg nav-link" style={gradientText}></i></li>
            </ul>
            <form>
              <button className="btn btn-outline-light btn-lg ms-4 me-5">
                <i className="fa-solid fa-arrow-up" style={gradientText}></i>
              </button>
            </form>
          </div>
        </nav>
        </div>
    </>
  )
}

export default Adminfooter;