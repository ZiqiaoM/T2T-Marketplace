import './App.css';
import Header from './Header';
import Hero from './Hero';
import Showpage from './Showpage';
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import Post from './Post';
import Layer1 from './Layer1';

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


    </div>
  );
}

export default App;
