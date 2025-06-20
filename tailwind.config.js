/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "top-[10px]",
    "top-[-1300%]",
    "opacity-100",
    "opacity-0",
    "pointer-events-auto",
    "pointer-events-none",
    "duration-400",
    "duration-[1500ms]",
    // 필요한 delay- 클래스도 추가
    "delay-75",
    "delay-100",
    "delay-150",
  ],
};
