import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainApp from "../App/Main/MainApp";
import { TechTypeScript } from "../App/tech-type-script";
import { EditorTest } from "../App/tech/editor/editor-test";
import Footer from "../Footer";
import Header from "../Header";
import Loading from "../Loading";

const AppRouters = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="wrap">
        <Loading />
        <Header />
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/typeScript" element={<TechTypeScript />} />
          <Route path="/editor" element={<EditorTest />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouters;
