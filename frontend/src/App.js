import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import TicketScore from './Components/TicketScore/TicketScore';
// import RouteScore from './Components/RouteScore/RouteScore';

function App() {
  return (
    <div className="App">

      <img className="position-absolute w-100 h-100 opacity-25" alt="" 
        src={process.env.PUBLIC_URL + "/images/background.jpg"}/>

      <div className="container">
        <TicketScore/>
      </div>

    </div>
  );
}

export default App;
