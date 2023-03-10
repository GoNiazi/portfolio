"use client";
import "./globals.css";
import { useState } from "react";
import Header from "./header";
import { ModeContext } from "./Context/index";
import { AnimatePresence } from "framer-motion";
export default function RootLayout({ children }) {
  const [darkmode, setdarkmode] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>Home</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="relative">
        <ModeContext.Provider value={{ darkmode, setdarkmode }}>
          <AnimatePresence>
            <Header />
            {children}
          </AnimatePresence>
        </ModeContext.Provider>
      </body>
    </html>
  );
}
