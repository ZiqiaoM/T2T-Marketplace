import './App.css';
import Header from './Header';
import Hero from './Hero';
import Showpage from './Showpage';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Post from './Post';
import Layer1 from './Layer1';
//Personal Center
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      {/* <Showpage /> */}
      <Layer1/>
      <Footer />


//登录注册功能
      {/* <Login />
      <Signup /> */}

//商品发布功能

      {/* <Post />  */}
{/* 个人中心(wishlist, my order, 信息修改, my sold)
目前wishlist和mysold用的一个页面 */}
    {/* <BrowserRouter>
      
      <Category />
      
      <Pages />
    </BrowserRouter> */}

    </div>
  );
}

export default App;
