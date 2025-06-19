import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import "./App.css";
import "./index.css";

import AppRouters from "./routes/app-routers";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const App = () => {
  return <AppRouters />;
};

export default App;
