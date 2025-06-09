import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "./images/logo/Main_Logo.png";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const menuOpen = document.querySelector(".gnb .menuOpen");
    const menuBox = document.querySelector(".gnb .menuBox");

    const toggleMenu = () => {
      menuBox.classList.toggle("on");
    };

    menuOpen.addEventListener("click", toggleMenu);

    return () => {
      menuOpen.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header>
      <div className="inner opacity">
        <a href={process.env.PUBLIC_URL} className="logo">
          <span>
            <img src={mainLogo} alt="" />
          </span>
        </a>
        <nav className="gnb">
          <p className="menuOpen">MENU</p>
          <ul className="menuBox">
            <li>
              <a href={process.env.PUBLIC_URL}>Home</a>
            </li>
            <li>
              {/*              <a href={process.env.PUBLIC_URL}>About</a> */}
              <p
                style={{
                  color: "#d3d3d3",
                  fontSize: "40px",
                  display: "block",
                }}
              >
                About
              </p>
            </li>
            <li>
              {/*  <a href={process.env.PUBLIC_URL}>Work</a> */}
              <p
                style={{
                  color: "#d3d3d3",
                  fontSize: "40px",
                  display: "block",
                }}
              >
                Work
              </p>
            </li>
            <li>
              {/*   <a href={process.env.PUBLIC_URL}>Portfolio UX</a> */}
              <p
                style={{
                  color: "#d3d3d3",
                  fontSize: "40px",
                  display: "block",
                }}
              >
                Portfolio UX
              </p>
            </li>
            <li>
              <p
                style={{
                  fontSize: "40px",
                  color: "#141212",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/typeScript")}
              >
                TypeScript
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
