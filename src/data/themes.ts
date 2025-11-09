export type ThemeType = {
  name: string;
  colors: Record<string, string>;
  font: {
    heading: string;
    body: string;
  };
  accent: string;
};

export const themes: Record<string, ThemeType> = {
  "LUXE-GLASS": {
    name: "LUXE-GLASS",
    colors: {
      "--bg": "linear-gradient(135deg, rgba(10,20,40,0.9), rgba(30,60,90,0.8))",
      "--text": "#ffffff",
      "--accent": "#c0b283"
    },
    font: {
      heading: "Playfair Display, serif",
      body: "Inter, sans-serif"
    },
    accent: "#c0b283"
  },
  "URBAN-COMM": {
    name: "URBAN-COMM",
    colors: {
      "--bg": "#ffffff",
      "--text": "#111111",
      "--accent": "#0078ff"
    },
    font: {
      heading: "Poppins, sans-serif",
      body: "Inter, sans-serif"
    },
    accent: "#0078ff"
  },
  "SEASON-CHRISTMAS": {
    name: "SEASON-CHRISTMAS",
    colors: {
      "--bg": "linear-gradient(180deg, #c10000, #003300)",
      "--text": "#ffffff",
      "--accent": "#ffcc00"
    },
    font: {
      heading: "Merriweather, serif",
      body: "Inter, sans-serif"
    },
    accent: "#ffcc00"
  },
  "SEASON-HALLOWEEN": {
    name: "SEASON-HALLOWEEN",
    colors: {
      "--bg": "linear-gradient(180deg, #000000, #220022)",
      "--text": "#ff6600",
      "--accent": "#39ff14"
    },
    font: {
      heading: "Creepster, cursive",
      body: "Inter, sans-serif"
    },
    accent: "#39ff14"
  }
};
