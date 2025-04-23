import React from 'react'

const Footer = () => {
  const gradientStyle = {
    background: 'linear-gradient(90deg, #00f260, #0575e6)',
  };
  const gradientText = {
    background: 'linear-gradient(90deg, #00f260, #0575e6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <>
      <div className="container-fluid" id="one" style={{ backgroundColor: 'rgba(51,51,56,1)' }}>
        <hr />

        {/* Heading */}
        <h1
          className="d-flex justify-content-center align-items-center"
          style={{
            background: 'linear-gradient(90deg, #00f260, #0575e6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            fontSize: '3rem',
            textAlign: 'center',
          }}
        >
          ElectroCart
        </h1>

        <hr />

        <div className="row" style={{ padding: '20px 20px' }}>
          {/* ABOUT US */}
          <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-between">
            <h4 className="text-white">ABOUT US</h4>
            <div className="mb-4" style={{ height: '3px', width: '80px', ...gradientStyle }}></div>
            <p className="text-white">
              Pellentesque feugiat feugiat ipsum, nec sollicitudin tortor convallis et. In venenatis, turpis eu condimentum
              ultrices, dui erat elementum ante, vitae finibus nisi libero a justo. Mauris ex ante, imperdiet et elementum
              id, mollis.
            </p>
            <p className="text-white">
              Quis felis. Praesent aliquet porttitor sem, at pretium erat tristique at. Proin molestie eros et ipsum pretium
              efficitur. Curabitur ligula sem, auctor at malesuada non, lobortis ornare dolor. Ut vitae ante non lectus
              fermentum
            </p>
          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-3 col-sm-12 d-flex flex-column justify-content-between">
            <h4 className="text-white">NEWSLETTER</h4>
            <div className="mb-2" style={{ height: '3px', width: '80px', ...gradientStyle }}></div>
            <p className="text-white mb-2">
              Subscribe to our newsletter for news, updates, exclusive discounts and offers.
            </p>
            <input type="text" className="form-control mb-2" placeholder="Enter your email" />
            <button
              type="button"
              className="btn rounded-pill mb-4 text-white"
              style={{
                ...gradientStyle,
                border: 'none',
              }}
            >
              Subscribe
            </button>
          </div>

          {/* CONTACT DETAILS */}
          <div className="col-lg-3 col-sm-12 d-flex flex-column justify-content-between">
            <h4 className="text-white">CONTACT DETAILS</h4>
            <div className="mb-2" style={{ height: '3px', width: '80px', ...gradientStyle }}></div>

            <div className="row mb-2">
              <div className="col-2">
                <span style={{ fontSize: 'x-large' }}>
                  <i className="fa-solid fa-location-dot" style={gradientText}></i>
                </span>
              </div>
              <div className="col-10 p-0 text-white">
                700 5th Avenue, New York City,<br /> United States
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-2">
                <span style={{ fontSize: 'x-large' }}>
                  <i className="fa-solid fa-phone" style={gradientText}></i>
                </span>
              </div>
              <div className="col-10">
                <div className="row text-white">1800-1111-2222</div>
                <div className="row text-white">Mon-Fri, 9.00am until 6.30pm</div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-2">
                <span style={{ fontSize: 'x-large' }}>
                  <i className="fa-solid fa-envelope" style={gradientText}></i>
                </span>
              </div>
              <div className="col-10">
                <div className="row text-white">booking@example.com</div>
                <div className="row text-white">We reply within 24 hrs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar Social Section */}
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

        <div className="bg-dark"></div>
      </div>
    </>
  );
};

export default Footer;
