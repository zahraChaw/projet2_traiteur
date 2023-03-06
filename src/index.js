import ReactDOM from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/navbar";
import Home from "./Components/slide";
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Plat from "./Components/Plat";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Services/>} />
          <Route path="plat" element={<Plat />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


