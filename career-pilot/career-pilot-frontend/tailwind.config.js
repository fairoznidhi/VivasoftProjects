/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navyBlue: "#081539",
        darkBlue: "#102970",
        grayBorder: "#D8D5D5",
        lightGrayBorder: "#E3E4E6",
        btnGrayBackground: "#F7F7F8",
        navbarWhiteBackground: "#FDFDFD",
        customBackgroundColor: "#F8FAFC",
        whiteGlow: "rgba(255, 255, 255, 0.4)",
        gradientBorder:
          "linear-gradient(190deg, rgba(6,204,254,0.2) 1%, rgba(0,81,255,0.2) 45.32%, rgba(0,164,156,0.2) 95.55%)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg, #DC02C3,#5C53FE)",
        "custom-line-gradient":
          "linear-gradient(235deg, #92EAFD 0%, #1071FE 46.88%, #A79EFA 100%)",
        dots: "radial-gradient(circle, #E5EFFF 1px, transparent 3px)",
        
      },
      backgroundSize: {
        dots: "35px 35px",
      },
      boxShadow: {
        "inset-white-glow":
          "inset 0 2px 5px rgba(255,255,255,0.2), inset 0 -2px 5px rgba(255,255,255,0.4)",
        nav: `0 5px 10px -8px rgba(26, 26, 26, 0.28),
              1px 0 0 0 rgba(0, 0, 0, 0.13) inset,
             -1px 0 0 0 rgba(0, 0, 0, 0.17) inset,
              0 -1px 0 0 rgba(0, 0, 0, 0.17) inset,
              0 1px 0 0 rgba(204, 204, 204, 0.5) inset`,
        custom: `1px 0 0 0 rgba(0, 0, 0, 0.13) inset,
           -1px 0 0 0 rgba(0, 0, 0, 0.13) inset,
           0 -1px 0 0 rgba(0, 0, 0, 0.17) inset,
           0 1px 0 0 rgba(204, 204, 204, 0.5) inset,
           0 1px 0 0 rgba(26, 26, 26, 0.07)`,
      },
      fontFamily: {
        tiktok: ["TikTok Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
