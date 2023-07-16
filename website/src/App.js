import AboutUs from './Components/about';
import club_data from './club_data.json';
import Navbar from './Components/navbar';
import Homepage from './Components/homepage';

const App = () => {
  return (
    <div >
      <Homepage data={club_data.main}/>
    </div>
  );
};

export default App;

