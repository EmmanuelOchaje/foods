import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import DetailsPage from "./pages/DetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="sm:p-6 p-1 text-green-600">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
