import "@/App.scss";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useVh } from "@hooks/useVh";

function App() {
  useVh();

  const menuItems = [
    {
      id: 1,
      url: "/",
      text: "Main",
    },
    {
      id: 2,
      url: "/about",
      text: "About",
    },
    {
      id: 3,
      url: "/services",
      text: "Service",
    },
    {
      id: 4,
      url: "/portfolio",
      text: "Portfolio",
    },
    {
      id: 5,
      url: "/contacts",
      text: "Contacts",
    },
  ];

  return (
    <div className="app">
      <Navbar menuItems={menuItems}></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
