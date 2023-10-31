import React from 'react'
import './Book.css'
import Ooty from '../Ooty';
import Kodaikanal from '../Kodaikanal';
import Kolli from '../Kolli';
import { Link } from 'react-router-dom';
import Bargur from '../Bargur';
import Hasanur from '../Hasanur';
import Hoggenakal from '../Hoggenakal';
import Courtralam from '../Courtralam';
import KanyaKumari from '../Kanyakumari';
import Dhanushkodi from '../Dhanushkodi';
import Yercaud from '../Yercaud';
import Rameshwaram from '../Rameshwaram';
import Masinagudi from '../Masinagudi';
import Thanjavur from '../Thanjavur';
import Mahabalipuram from '../Mahabalipuram';
import Kotagiri from '../Kotagiri';
function Book() {
    return(
    <div className="Mytop">
                <p1>
                  Booking                       
                </p1>  
        <section className="Tou-sec" id="tour">
        <div className="container">
            <div className="heading">
              <h2>Top Tourist Places In TamilNadu</h2>
            </div>
                     {/* <h5><a className="nav-link" href="/Cart">
                             1.Ooty
                          </a></h5> */}
                          <Link to="/Cart">1.Ooty</Link>
                          
       < div className="container"><Ooty/>
       </div> <br></br>
                  <br></br>
                  {/* <h5><a className="nav-link" href="/Cart">
                             2.Kodaikanal
                          </a></h5> */}
                          <Link to="/Cart">2.Kodaikanal</Link>
                  <div className="Kodaikanal">
                  <Kodaikanal/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">3.Kollimalai</Link>
                  {/* <h5><a className="nav-link" href="/Cart">3.Kollimalai</a></h5> */}
                  <div className="Kolli"><Kolli/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">4.Hasanur</Link>
                  {/* <h5><a className="nav-link" href="/Cart">4.Hasanur</a></h5> */}
                  <div className="Hasanur">
                    <Hasanur/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">5.Bargur</Link>
                  {/* <h5><a className="nav-link" href="/Cart">5.Bargur</a></h5> */}
                  <div className="Bargur">
                    <Bargur/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">6.Hoggenakal</Link>
                  {/* <h5><a className="nav-link" href="/Cart">6.Hoggenakal</a></h5> */}
                  <div className="Hoggenakal">
                    <Hoggenakal/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">7.Courtallam</Link>
                  {/* <h5><a className="nav-link" href="/Cart">7.Courtallam</a></h5> */}
                  <div className="Courtralam">
                    <Courtralam/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">8.KanyaKumari</Link>
                  {/* <h5><a className="nav-link" href="/Cart">8.KanyaKumari</a></h5> */}
                  <div className="Kanyakumari">
                    <KanyaKumari/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">9.DhanushKodi</Link>
                  {/* <h5><a className="nav-link" href="/Cart">9.DhanushKodi</a></h5> */}
                  <div className="Dhanushkodi">
                    <Dhanushkodi/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">10.Yercaud</Link>
                  {/* <h5><a className="nav-link" href="/Cart">10.Yercaud</a></h5> */}
                  <div className="Yercaud">
                    <Yercaud/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">11.Rameshwaram</Link>
                  {/* <h5><a className="nav-link" href="/Cart">11.Rameshwaram</a></h5> */}
                  <div className="Rameshwaram">
                    <Rameshwaram/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">12.Masinagudi</Link>
                  {/* <h5><a className="nav-link" href="/Cart">12.Masinagudi</a></h5> */}
                  <div className="Masinagudi">
                    <Masinagudi/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">13.Thanjavur</Link>
                  {/* <h5><a className="nav-link" href="/Cart">13.Thanjavur</a></h5> */}
                  <div className="Thanjavur">
                    <Thanjavur/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">14.Mahabalipuram</Link>
                  {/* <h5><a className="nav-link" href="/Cart">14.Mahabalipuram</a></h5> */}
                  <div className="Mahabalipuram">
                    < Mahabalipuram/>
                  </div>
                  <br></br>
                  <br></br>
                  <Link to="/Cart">15.Kotagiri</Link>
                  {/* <h5><a className="nav-link" href="/Cart">15.Kotagiri</a></h5> */}
                  <div className="Kotagiri">
                    <Kotagiri/>
                  </div>
                  <Link to="/Home1">
                  <button>Return</button></Link>
                </div>
        </section>
        </div>
    );
}

export default Book;