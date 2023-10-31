import React from 'react';
import img from './TNTourlog.jpeg'
import { Link } from "react-router-dom";
import './Home.css';
function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Code Convent Foundation</title>
        <link rel="stylesheet" href="./App.css" />
        <link rel="stylesheet" href="./res.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <div className="fixed-top">
          <header>
            <div className="container">
           
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#home">
                <img src={img}  alt=""></img>
                </a> 
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li>
                    <a className="nav-link" href="#">
                             Home
                          </a>
                    </li>
                    <li>
                    <Link to="/Login1" className='nav-link'>Login</Link>
                    {/* <a className="nav-link" href="/Login1">
                             Login
                          </a> */}
                     </li> 
                    <li className="nav-item">
                      <a className="nav-link" href="#bot">
                        Contact 
                      </a>
                    </li> 
                  </ul>
                </div>
              </nav>
            </div>
          </header>
        </div>
        <section className="home-sec" id="home">
            <div className="home-content">
              <div className="row">
                <div className="col-lg-6 align-item-center">
                  <div className="home-info">
                    <h2>
                          <span> </span>
                             
                    </h2>
                    <h3>Welcomes You</h3><br></br>
                    <h1><span>Have A pleasant Experience!!!</span></h1>
                    <p>
                      Hope you love our tourism and Services.Our Tourism Service is One of the best tourism service in TamilNadu.All Around TamilNadu We are providing best service for our customers and travellers. 
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 order-first order-lg-last">
                  <div className="img-sec">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/670/592/non_2x/colorful-global-tn-travel-logo-icon-minimalist-air-tn-logo-letter-design-vector.jpg"                      
                      alt="image"/>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className="don-sec" id="Service">
          <div className="container">
            <div className="heading">
              <h2>Service Info</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.IgOA--8BqeuQ7NMGjEqYgAHaET&pid=Api&P=0&h=180"
                    alt="img"
                  />
                  <h3>Food Indian/Chinese</h3>
                  <Link to="/Food">Details</Link>
                  {/* <a href="/Food" className="btn1">
                    Details
                  </a> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                   src="https://tse3.mm.bing.net/th?id=OIP.POh0QTQSrTFB8FQ0ObpqkwHaFJ&pid=Api&P=0&h=180"
                   alt="img"
                  /><br />
                  <h3>Bus/Travellers</h3><br />
                  <Link to="/Transport">Details</Link>
                  {/* <a href="/Transport" className="btn1">
                    Details
                  </a><br /> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img
                  src="https://tse4.mm.bing.net/th?id=OIP.v8j8CdRw3TqidjkMXH0hywHaEJ&pid=Api&P=0&h=180"
                    alt="img"
                  /><br />
                  <h3>Hotels</h3><br></br>
                  <Link to="/Hotel">Details</Link>
                  {/* <a href="/Hotel" className="btn1">
                    Details
                  </a><br/> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.6Gp-oUAqCU1MYPBhghAHyAHaFj&pid=Api&P=0&h=180" alt="img" />
                  <h3>Trekking</h3><br></br>
                  <Link to="/Trekking">Details</Link>
                  {/* <a href="/Trekking" className="btn1">
                      Details
                  </a> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.2iF5IC3cqCZFL3cnTZYGAgHaFL&pid=Api&P=0&h=180" alt="img" />
                  <h3>LocationSpoting</h3><br></br>
                  <Link to="/LocSpot">Details</Link>
                  {/* <a href="/LocSpot" className="btn1">
                    Details
                  </a> */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="don-box">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9sZsXb53G_BNwjxrhTlONAHaE8&pid=Api&P=0&h=180" alt="img" />
                  <h3>Campping</h3><br></br>
                  <Link to="/CampFire">Details</Link>
                  {/* <a href="/CampFire" className="btn1">
                    Details
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="profile" id="profile-id">
          <div className="container">
            <div className="heading">
              <h2>Profile</h2>
              <p>
              Tamil Nadu tourism offers a captivating blend of history, culture, nature, and gastronomy. Whether you're interested in exploring ancient temples, enjoying classical art forms, immersing yourself in festivals, or experiencing the state's diverse landscapes and culinary delights, Tamil Nadu has something to offer every traveler.
              </p>
            </div>
            <div className="gallery-sec">
              <div className="container">
                <div className="image-container">
                  <div className="image">
                    <img src="https://static.india.com/wp-content/uploads/2018/10/Ooty.jpg?impolicy=Medium_Resize&w=1200&h=800" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://indiain360.com/wp-content/uploads/2021/03/040310KOLLI_HILLS.jpg" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://www.trawell.in/admin/images/upload/170270498Yercaud_Main.jpg" alt="img" />
                  
                  </div>
                  <div className="image">
                    <img src="https://www.trawell.in/admin/images/upload/598566908Tenkasi_Courtallam_Falls_Main.jpg" alt="img" />
                  </div>
                  <div className="image">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d2/66/39/view-from-dam-top.jpg?w=600&h=400&s=1" alt="img" />
                  </div>
                </div>
              </div>
              <div className="pop-image">
                <span>&times;</span>
                <img src="img/gallery/1.jpg" alt="gallery-img" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="Tour-sec" id="tour">
        <div className="container">
            <div className="heading">
              <h2>Top Tourist Places In TamilNadu</h2>
              <p>
              
              </p>
            </div>
                  <h5>1.Ooty</h5>
                  <div className="image">
                    <img src="https://content.r9cdn.net/rimg/dimg/70/c1/b448d083-city-49664-16953cdf0c2.jpg?width=1366&height=768&xhint=1381&yhint=1207&crop=true" alt="img1" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>2.kodaikanal</h5>
                  <div className="image">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*sbbRbM3Pk1LFdeeK8vYaPA.jpeg" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>3.Kollimalai</h5>
                  <div className="image">
                    <img src="https://www.holidify.com/images/bgImages/KOLLI-HILLS.jpg" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>4.Hasanur</h5>
                  <div className="image">
                    <img src="https://irfanclicks.com/wp-content/uploads/2021/01/hasanur-view-point-8643.jpg" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>5.Bargur</h5>
                  <div className="image">
                    <img src="https://bargurhillsideresort.com/wp-content/uploads/2023/02/village-pyrenees-noales-aragon-950x634.jpg" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>6.Hoggenakal</h5>
                  <div className="image">
                    <img src="https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F01%2F29%2Fhogenakal-1-1075790-1643410573.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>7.Courtallam</h5>
                  <div className="image">
                    <img src="https://assets.telegraphindia.com/telegraph/2022/Aug/1660132403_courtallam-main-falls-1.jpg" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>8.KanyaKumari</h5>
                  <div className="image">
                    <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/thiruvalluvar-statue-kanyakumari-1655196623_b2c20ff64e13e74324d6.webp" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>9.DhanushKodi</h5>
                  <div className="image">
                    <img src="https://static.wixstatic.com/media/afedd9_3e1fa12091ec46fa8deb25a5570f8b35~mv2.jpg/v1/fill/w_600,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/afedd9_3e1fa12091ec46fa8deb25a5570f8b35~mv2.jpg" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>10.Yercaud</h5>
                  <div className="image">
                    <img src="https://ancientterminus.com/wp-content/uploads/2022/08/Yercaud-Feature-Img.webp" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>11.Rameshwaram</h5>
                  <div className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Pamban_Bridge_Train_Passing.jpg" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>12.Masinagudi</h5>
                  <div className="image">
                    <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/masinagudi-1657513731_6e94f6eac79e39c1b480.webp" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>13.Thanjavur</h5>
                  <div className="image">
                    <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/thanjavur-1655294212_8d67c2fdaa46899ddda7.webp" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>14.Mahabalipuram</h5>
                  <div className="image">
                    <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/mahabalipuram-1654870108_c538505993052d39e713.webp" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                  <h5>15.Kotagiri</h5>
                  <div className="image">
                    <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kil-kotagiri-1657617452_714368acffbd7c8cb11b.webp" alt="img" />
                  </div>
                  <br></br>
                  <br></br>
                </div>
        </section>
        <footer>
        <section className="bottom-sec" id="bot">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="col-one">
                  <h4>TamilNadu Tourism Pvt Ltd...</h4>
                  <p>
                    Address : SenthilrajComplex,DS Street,Chithode,Erode.
                    {' '}
                  </p>
                  <p>
                    Contact No :{' '}
                    <a href="Ph: +91 9488833423">9488833423</a>
                  </p>
                  <p>Email : <a href="mailto:foundation@code.com">tntourshan@gmail.com</a></p>
                </div>
              </div>
              <div className="col-lg-4">
              <div className="img-sec">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/025/670/592/non_2x/colorful-global-tn-travel-logo-icon-minimalist-air-tn-logo-letter-design-vector.jpg"                      
                      alt="image"/>
                  </div>

              </div>
              <div className="col-lg-4">
                <div className="col-one">
                  <h4>Social Media</h4>
                  <div className="social">
                    <a href="#">
                      <img src="https://img.freepik.com/premium-vector/vinnitsyaukrainejanuary-24-2021facebook-vector-image-flat-icon-with-letter-f-blue-color-button-with-letter-isolated-white-background_736051-65.jpg" alt="facebook" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2__NOQ1ZLsjPL_IqgD9fP5jNSbIIbHugRg&usqp=CAU" alt="instagram" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanFxQQbxmCbCuzFHrlXGS0nogyFrPVpdrkWCenFYBXGZwPoUdsEnEDb35OJiVu3gQB5Y&usqp=CAU" alt="youtube" />
                    </a>
                    <a href="#">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrefHFmS_OINItmSqPWM0V5J846e_rFuxNGPt42UZ1G3P3QVhzIhPAmGYEqxImqlhs_ag&usqp=CAU" alt="linkedin" />
                    </a>
                    <a href="#">
                      <img src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png?f=webp&w=256" alt="gmail" />
                    </a>
                  </div>
                  <p>Copyright &copy; 2023 | All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </footer>
        <script src="js/script.js"></script>
      </body>
    </html>
  );
}
export default Home;