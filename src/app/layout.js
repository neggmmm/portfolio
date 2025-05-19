import "./globals.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; // Uncomment if you have a Footer

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-beige min-h-screen font-sans">
        <Navbar />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
