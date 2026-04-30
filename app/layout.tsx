import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <Footer />
      </body>
    </html>
  )
}
export const metadata = {
  metadataBase: new URL("https://larutadeunapsicologa.com"),
  alternates: {
    canonical: "/",
  },
};