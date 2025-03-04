
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import JourneyAIDemo from "./pages/journeyAiDemo";
import TaskflowDemo from "./pages/taskflowDemo";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/journeyai" element={<JourneyAIDemo/>} />
          <Route path="/taskflow" element={<TaskflowDemo/>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
