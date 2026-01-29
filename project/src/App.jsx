import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReportingList from "./components/ReportingList";
import MultiStepForm from "./admin/addData/MultiStepForm";
import Login from "./auth/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportingList />} />
          <Route path="/add" element={<MultiStepForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;