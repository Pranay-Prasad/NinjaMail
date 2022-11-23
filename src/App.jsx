import logo from './logo.svg';
import './App.css';
import logo_icon from './Images/logo_icon.png';
import logo_name from './Images/logo_name.png';
import hero_banner from './Images/bg1.png';
import temp1 from './Images/temp1.png';
import temp2 from './Images/temp2.png';
import logo1 from './Images/logo1.png';
import logo2 from './Images/logo2.png';
import logo3 from './Images/logo3.png';
import logo4 from './Images/logo4.png';
import logo5 from './Images/logo5.png';
function App() {
  return (
    <>
      <header className='header'>
        <div className="logo_container">
          <img className='Logo_icon' src={logo_icon} alt="LOGO_ICON"/>
          <img className='Logo_name' src={logo_name} alt="LOGO_NAME" />
        </div>
        <div className="item_tray">
          <ul className="item_list">
            <li className="item"><a>FEATURES</a></li>
            <li className="item"><a>PRICING</a></li>
            <li className="item"><a>SERVICES</a></li>
            <li className="item"><a>PARTNERS</a></li>
          </ul>
          <div className='sign_up'><a>SIGN UP FREE</a></div>
        </div>
      </header>
      <section className="container main_hero">
        <div className="text_container">
            <h2 className='main_heading'>Create Stunning Email Campaigns</h2>
            <p className="header_info">Create and launch email campaigns that captivate your customers in just a few clicks</p>
            <div className="navigator_buttons">
              <div className="btn"><a>TRY NOW</a></div>
              <div className="btn"><a>GET A DEMO</a></div>
            </div>
        </div>
        <div className="hero_banner_container">
          <img src={hero_banner} alt="" />
        </div>
      </section>
      <section className="container long_section">
        <div className="aligner_section">
        <div className="learn_more">
          <h1>Reach More Customer</h1>
          <div className="learn_more_btn"><a>LEARN HOW</a></div>
        </div>
        </div>
        <div className="mid_section">
          <div className="card">
            <img src={temp1} alt="" />
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, obcaecati. Alias inventore corrupti odio adipisci.</p>
              <a href="#" className="learn_more_nav">Learn More &gt;</a>
            </div>
          </div>
          <div className="card low_card">
            <img src={temp2} alt="" />
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, obcaecati. Alias inventore corrupti odio adipisci.</p>
              <a href="#" className="learn_more_nav">Learn More &gt;</a>
            </div>
          </div>
          <div className="content">
            <h3>The spurce for proven, engaging email campaigns</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ea nobis officia impedit quisquam similique adipisci dolor odit repellat pariatur, possimus exercitationem id qui ullam magni alias voluptatum rem inventore!</p>
          </div>
        </div>
        <div className="lower_section">
          <div className="card_land card1">
            <div className="text_holder">
            <h3>Frankie</h3>
            <p>member since 2016</p>
            </div>
          </div>
          <div className="card_land card2">
            <div className="text_holder">
            <h3>Camile</h3>
            <p>member since 2012</p>
            </div>
          </div>
          <div className="card_land card3">
            <div className="text_holder">
            <h3>Elayne</h3>
            <p>member since 2018</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sponsers container">
        <div className="container_heading">
          <h2>Learn how others are reaching their audience easier than ever before</h2>
        </div>
        <div className="email_join">
          <div className="input_box">
            <input type="email" placeholder='Enter your email' />
            <small>Thanks! Email recived</small>
          </div>
          <div className="join">JOIN OUR LIST</div>
        </div>
        <div className="heading_sponser">
          <h1>All the best brands already use us</h1>
        </div>
        <div className="sponser_tags">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </section>
      <section className='container started'>
        <h2>Get started today!</h2>
        <div className="pick_blan">PICK A PLAN</div>
      </section>
      <footer className="footer container">
        <div className="logo_container">
          <img src={logo_icon} alt="LOGO_ICON"/>
          <img src={logo_name} alt="LOGO_NAME" />
        </div>
        <div className="list">
          <ul className="list1">
            <li>Features</li>
            <li>Pricing</li>
            <li>Services</li>
            <li>Partners</li>
          </ul>
          <ul className="list2">
            <li>About Us</li>
            <li>Tutorials</li>
            <li>Resources</li>
            <li>Help center</li>
            <li>Templates</li>
            <li>Case Studies</li>
          </ul>
          <ul className="list3">
            <li>Medium</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <ul className="list4">
            <li>Contact Us</li>
            <li>Slack</li>
            <li>Jobs</li>
          </ul>
        </div>
      </footer>
      <div className="copyright container">
        <div className="copy_right">
          <small>NinjaMail is a smple projct for AI &copy; 2019 Quest AI, All rights resered</small>
        </div>
        <div className="TC">
          <small>Terms & Conditions</small>
          <small>Privacy Policy</small>
        </div>
      </div>
    </>
  );
}

export default App;
