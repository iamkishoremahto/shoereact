import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className="container-fluid" id='Navigation'>
      <div className="container">
        <div className="row navbar">
          <div className="col-md-1">
            <img src="./public/images/brand_logo.png" alt="" className="img-fluid" id="logo" />
          </div>
          <div className="col-md-10">
            <nav>
              <ul className="navlist">
                <li href = "#" className="navlink">Menu</li>
                <li href = "#" className="navlink">Location</li>
                <li href = "#" className="navlink">About</li>
                <li href = "#" className="navlink">Contact</li>
              </ul>
            </nav>
          </div>
          <div className="col-md-1">
            <button className="red_btn">Login</button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
};

export default Navbar;