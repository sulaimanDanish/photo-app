import './App.css';
import Navbar from "./components/Navbar";
import AlbumList from "./components/AlbumList";
import {ToastContainer} from "react-toastify";
import PhotoProvider from './photoContext';

function App() {
  return (
    <PhotoProvider>
      <ToastContainer/>
      <div className="App">
        <Navbar />
       <AlbumList />
      </div>
    </PhotoProvider>
  );
}

export default App;
