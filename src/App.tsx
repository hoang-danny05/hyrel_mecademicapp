import { useState, useEffect } from "react";
// import API from "./Backend.ts"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.tsx";
//pages
import Homepage from "./routes/Homepage.tsx";
import Grid from "./routes/Grid.tsx"
import None from "./routes/None.tsx"


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* parent route that appends a / for no reason */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="grid" element={<Grid />} />
            <Route path="*" element={<None />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
