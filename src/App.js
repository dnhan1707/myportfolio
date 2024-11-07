
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import JourneyAIDemo from "./pages/journeyAiDemo";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/journeyai" element={<JourneyAIDemo/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
