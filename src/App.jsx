import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import News from "./pages/News/news";
import Shop from "./pages/Shop/shop";
import './App.css'
import Header from "./components/Header/header";
import HeaderLayout from "./components/HeaderLayout/headerLayout";
import CreateAccount from "./pages/CreateAccount/createAccount";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/news" element={<News />}/>
          <Route path="/shop" element={<Shop />}/>
        </Route>
          <Route path="/createaccount" element={<CreateAccount />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
