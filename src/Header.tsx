import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import mainLogo from "./images/logo/Main_Logo.png";

interface LanguageInfo {
  nativeName: string;
}
const lngs: Record<string, LanguageInfo> = {
  ko: { nativeName: "KO" },
  en: { nativeName: "EN" },
};
type LngKey = keyof typeof lngs;
type MenuType = "link" | "text" | "button";

interface MenuItem {
  label: string;
  type: MenuType;
  path?: string;
}

const Header = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  const menuList: MenuItem[] = [
    { label: "home", type: "link", path: process.env.PUBLIC_URL },
    { label: "about", type: "text" },
    { label: "work", type: "text" },
    { label: "portfolioUx", type: "text" },
    { label: "typescript", type: "button", path: "/typeScript" },
    { label: "editor", type: "button", path: "/editor" },
  ];
  const delayArr = ["", "delay-75", "delay-100", "delay-150"];

  return (
    <header className="fixed w-full z-50">
      <div className="pt-[30px] px-[50px] pb-0 flex justify-between items-center">
        <a
          href={process.env.PUBLIC_URL}
          className="w-[150px] flex-shrink-0 z-50"
        >
          <span className="py-0 px-[1px]">
            <img src={mainLogo} alt="메인 로고" className="w-[95px]" />
          </span>
        </a>
        <nav className="relative flex-1 min-h-[60px] ">
          {/* 메뉴 오픈 버튼 */}
          <button
            className="
              absolute left-1/2 -translate-x-1/2 top-0
              py-[30px] px-0
              text-sm font-semibold
              z-50 cursor-pointer text-[#141212]
              group select-none bg-transparent border-0
            "
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {t("menu") || "MENU"}
            <span
              className={clsx(
                "block absolute left-1/2 -translate-x-1/2 top-[15px]",
                "h-[1px] rounded-[30px] bg-[#141212]",
                "transition-all duration-300",
                menuOpen ? "w-[130px]" : "w-[70px]",
                "pointer-events-none"
              )}
              aria-hidden
            />
          </button>

          {/* 메뉴 리스트 */}
          <ul
            className={clsx(
              "absolute left-1/2 -translate-x-1/2 min-w-[97vw] text-center bg-[#f8f8f8]/10 backdrop-blur-[10px] rounded-[5px] pt-[100px] pb-[30px] box-border z-40 transition-all ",
              menuOpen
                ? "top-[10px] opacity-100 pointer-events-auto duration-400"
                : "top-[-1300%] opacity-0 pointer-events-none duration-[1500ms]"
            )}
          >
            {menuList.map((item, idx) => {
              const delayClass = menuOpen && idx <= 3 ? delayArr[idx] : "";
              const animClass = clsx(
                "block text-[40px] transition-all duration-600 transform ",
                menuOpen ? "translate-y-0" : "-translate-y-[100px]",
                delayClass
              );
              const label = t(item.label);

              if (item.type === "link") {
                return (
                  <li className="overflow-hidden" key={item.label}>
                    <a
                      href={item.path}
                      className={clsx(animClass, "text-[#141212]")}
                    >
                      {label}
                    </a>
                  </li>
                );
              }
              if (item.type === "text") {
                return (
                  <li className="overflow-hidden" key={item.label}>
                    <span className={clsx(animClass, "text-[#d3d3d3]")}>
                      {label}
                    </span>
                  </li>
                );
              }
              if (item.type === "button") {
                return (
                  <li className="overflow-hidden" key={item.label}>
                    <button
                      className={clsx(
                        animClass,
                        "text-[#141212] cursor-pointer bg-transparent border-0 outline-none text-center  w-full ",
                        item.label === "Editor" && "hover:text-[#383535]"
                      )}
                      onClick={() => handleNavigate(item.path!)}
                      type="button"
                    >
                      {label}
                    </button>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </nav>

        <div className="w-[150px] text-black flex-shrink-0 flex justify-end items-center gap-2 z-50">
          {Object.entries(lngs)
            .filter(([lng]) => lng !== i18n.resolvedLanguage)
            .map(([lng, { nativeName }]) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng as LngKey)}
                className="px-2 py-1 rounded text-sm"
              >
                {nativeName}
              </button>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
