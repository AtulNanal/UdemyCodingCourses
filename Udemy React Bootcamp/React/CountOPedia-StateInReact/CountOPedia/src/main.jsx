import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
// Replace Counter and CounterOtehr are two alternate components doing same work.
// CounterOther uses state object for managing count and game status
// While in Count, these are handled by two different states variables
// import Counter from "./Counter";
import CounterOther from "./CounterOther";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* class added here to make the Footer sticky */}
    {/* d-flex → Makes the element a flex container. */}
    {/* flex-column → Arranges flex items vertically (in a column). */}
    {/* min-vh-100 → Sets the element’s minimum height to 100% of the viewport height. */}
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <CounterOther />
      </main>
      <Footer />
    </div>
  </StrictMode>
);
