
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import JourneyAIDemo from "./pages/journeyAiDemo";
import TaskflowDemo from "./pages/taskflowDemo";
import RealTimeCodingDemo from "./pages/realTimeCodingDemo";
import VoiceAiAssistant from "./pages/voiceAssistantDemo";
import KelSelYay from "./pages/kelSelYay";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/journeyai" element={<JourneyAIDemo/>} />
          <Route path="/taskflow" element={<TaskflowDemo/>} />
          <Route path="/realtimecodingproject" element={<RealTimeCodingDemo/>} />
          <Route path="/voiceaiassistant" element={<VoiceAiAssistant/>} />
          <Route path="/kelselyay" element={<KelSelYay/>} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
