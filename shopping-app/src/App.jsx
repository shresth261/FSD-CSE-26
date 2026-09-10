import UserLayout from "./pages/UserLayout"
import "./App.css"
import { BrowserRouter, Route,Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout/>}/>
          <Route path="/mycart" element={<h1> My Cart</h1>}/>
          <Route path="/myorders" element={<h1>My Orders</h1>}/>
          <Route path="/settings" element={<h1>Settings Page</h1>}/>
          <Route path="/profile" element={<h1>My Profile</h1>}/>
          <Route path="/logout" element={<h1>Logout Page</h1>}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App