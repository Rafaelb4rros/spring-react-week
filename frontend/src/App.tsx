import { Datatable } from "components/Datatable";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Datatable />
      </div>
      <Footer />
    </div>
  );
}
