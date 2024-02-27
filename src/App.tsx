import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import HomePage from "./pages/Home";
import SettingPage from "./pages/Setting";
import DevicePage from "./pages/Device";
import GroupPage from "./pages/Group";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="group" element={<GroupPage />} />
        <Route path="device" element={<DevicePage />} />
        <Route path="setting" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <HomePage />
    // </>
  )
}

export default App
