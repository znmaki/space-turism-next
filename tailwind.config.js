module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url(/home/background-home-desktop.jpg)",
        "home-mobile": "url(/home/background-home-mobile.jpg)",
        "home-tablet": "url(/home/background-home-tablet.jpg)",
        "destination-desktop": "url(/destination/background-destination-desktop.jpg)",
        "destination-mobile": "url(/destination/background-destination-mobile.jpg)",
        "destination-tablet": "url(/destination/background-destination-tablet.jpg)",
        "crew-desktop": "url(/crew/background-crew-desktop.jpg)",
        "crew-mobile": "url(/crew/background-crew-mobile.jpg)",
        "crew-tablet": "url(/crew/background-crew-tablet.jpg)",
        "technology-desktop": "url(/technology/background-technology-desktop.jpg)",
        "technology-mobile": "url(/technology/background-technology-mobile.jpg)",
        "technology-tablet": "url(/technology/background-technology-tablet.jpg)",
      },
      colors: {
        "blue-full": "#0B0D17",
        "blue-opacity": "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
      fontSize: {
        base: ["16px", "20px"],
      },
    },
  },
  plugins: [],
};
