
import './Hero.css';

const Hero = () => {
    return(
        <>
        <div className="container-fluid" id='product_view'>
        <div className="container" id="content">
          <div className="row" id="content_body">
            <div className="col-md-6" id="content_heading">
              <h1>
                YOUR FEET DESERVE THE BEST
              </h1>
              <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.

              </p>

              <div className="button_group">
                <button className='red_btn'>Shop Now</button>
                <button className='red_btn'>Category</button>
              </div>

              <div className="store">
                <p>Also Available On</p>
                <div className="store_logo_group">
                  <img src="./public/images/flipkart.png" alt="flipkart" className="img-fluid store_log" />
                  <img src="./public/images/amazon.png" alt="amazon" className="img-fluid store_log" />
                </div>
              </div>
            </div>

            <div className="col-md-6 show_show">
              <img src="./public/images/shoe_image.png" alt="shoe" className="img-fluid shoe_pic" />
            </div>
          </div>
        </div>
      </div>
        </>
    )
};

export default Hero;