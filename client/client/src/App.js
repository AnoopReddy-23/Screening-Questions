//components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

//css file
import './App.css'

function App() {

  return (
    <div className="App">
      
      {/* header */}
      <div className="header">
        <Header />
      </div>

      {/* footer */}
      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;