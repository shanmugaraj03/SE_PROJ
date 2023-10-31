import './App.css';
import Home from './Pages/Home';
import NewUser from './Pages/NewUser';
import Login from './Pages/Login1';
import Payment from './Pages/Payment';
import Food from './Pages/Food';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Transport from './Pages/Transport';
import Hotel from './Pages/Hotels';
import Trekking from './Pages/Trekking';
import LocSpot from './Pages/LocSpot';
import CampFire from './Pages/Camfire';
import Book from './Pages/Book';
import Cart from './Pages/cart';
import Pay2 from './Pages/Pay2';
import Pay4 from './Pages/Pay4';
import Pay6 from './Pages/Pay6';
import Bill from './Pages/Bill';
import Paymen1 from './Pages/Paymen1';
import Paymen2 from './Pages/Paymen2';
import Bill2 from './Pages/Bill2';
import Paymen3 from './Pages/Paymen3';
import Bill3 from './Pages/Bill3';
import Home1 from './Pages/Home1';
import Food1 from './Pages/Food1';
import CampFire1 from './Pages/Camfire1';
import Trekking1 from './Pages/Trekking1';
import Transport1 from './Pages/Transport1';
import Hotel1 from './Pages/Hotel1';
import LocSpot1 from './Pages/Locspot1';
import Type1 from './Pages/Type1';
import Type2 from './Pages/Type2';
import Type3 from './Pages/Type3';
import Card1 from './Pages/Card1';
import Card2 from './Pages/Card2';
import Card3 from './Pages/Card3';
import OTP from './Pages/Otp';
import OTP2 from './Pages/Otp2';
import OTP3 from './Pages/otp3';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login1" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Home1" element={<Home1/>} />
          <Route path="/new" element={<NewUser/>} />
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/Food" element={<Food/>} />
          <Route path="/Transport" element={<Transport/>} />
          <Route path="/Hotel" element={<Hotel/>}/>
          <Route path="/Trekking" element={<Trekking/>}/>
          <Route path="/LocSpot" element={<LocSpot/>}/>
          <Route path="/CampFire" element={<CampFire/>}/>
          <Route path="/Book" element={<Book/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Pay2" element={<Pay2/>}/>
          <Route path="/Pay4" element={<Pay4/>}/>
          <Route path="/Pay6" element={<Pay6/>}/>
          <Route path="/Bill" element={<Bill/>}/>
          <Route path="/Paymen1" element={<Paymen1/>}/>
          <Route path="/Paymen2" element={<Paymen2/>}/>
          <Route path="/Bill2" element={<Bill2/>}/>
          <Route path="/Paymen3" element={<Paymen3/>}/>
          <Route path="/Bill3" element={<Bill3/>}/>
          <Route path="/Food1" element={<Food1/>} />
          <Route path="/Transport1" element={<Transport1/>} />
          <Route path="/Hotel1" element={<Hotel1/>}/>
          <Route path="/Trekking1" element={<Trekking1/>}/>
          <Route path="/LocSpot1" element={<LocSpot1/>}/>
          <Route path="/CampFire1" element={<CampFire1/>}/>
          <Route path="/Type1" element={<Type1/>} />
          <Route path="/Type2" element={<Type2/>} />
          <Route path="/Type3" element={<Type3/>} />
          <Route path="Card1" element={<Card1/>} />
          <Route path="Card2" element={<Card2/>} />
          <Route path="Card3" element={<Card3/>} />
          <Route path="OTP" element={<OTP/>} />
          <Route path="OTP2" element={<OTP2/>} />
          <Route path="OTP3" element={<OTP3/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
