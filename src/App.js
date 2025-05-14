import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from './HOC/LayoutDefault';
import HomePages from "./Pages/HomePages/HomePages";
import Room from './Pages/Room/Room';
import BookingHistory from "./Pages/BookingHistory/BookingHistory";
import Payment from './Pages/Payment/Payment';
import Login from "./Pages/Login/Login";
import Register from './Pages/Register/Register';
import BookingDetail from './Pages/BookingDetail/BookingDetail';
import Booking from "./Pages/Booking/Booking";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <LayoutDefault>
          <HomePages/>
        </LayoutDefault>
      } />
      <Route path="/all-list-room" element={
        <LayoutDefault>
          <Room/>
        </LayoutDefault>
      } />
        <Route path="/history-booking" element={
        <LayoutDefault>
          <BookingHistory/>
        </LayoutDefault>
      } />
       <Route path="/receipt" element={
        <LayoutDefault>
         <Payment/>
        </LayoutDefault>
      } />
         <Route path="/login" element={
        <LayoutDefault>
         <Login/>
        </LayoutDefault>
      } />
       <Route path="/register" element={
        <LayoutDefault>
         <Register/>
        </LayoutDefault>
      } />
       <Route path="/detail-room/:id" element={
        <LayoutDefault>
         <BookingDetail/>
        </LayoutDefault>
      } />
      <Route path="/booking-room/:id" element={
        <LayoutDefault>
         <Booking/>
        </LayoutDefault>
      } />
    </Routes>
    
    
    
    </BrowserRouter>
  );
}

export default App;
