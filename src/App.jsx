import { GlobalStyle } from "./assets/styles/Global"
import Home from "./pages/Home/Home"
import Matches from "./pages/Matches/Matches";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
