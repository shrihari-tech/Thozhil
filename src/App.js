import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Courses />
      <Footer/>
    </div>
  );
}

export default App;
