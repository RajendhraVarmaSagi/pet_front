import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import { ImSpinner3 } from "react-icons/im";

let Home = lazy(() => import("./pages/Home"));
let Login = lazy(() => import("./pages/Login"));
let Signup = lazy(() => import("./pages/Signup"));
let FollowersFollowing = lazy(() => import("./pages/FollowersFollowing"));
let NoPage = lazy(() => import("./pages/NoPage"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="center-content-in-window">
            <div>
              <ImSpinner3 style={{ fontSize: "2rem" }} />
            </div>
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<FollowersFollowing />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
