import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
// you can import google fonts directly and apply them via className//

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Space Travel',
  description: 'Space tourism website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* favicon added  automagically by naming the tab image to icon.*/}
        {/* add Nav component here in layout so it can be shared across all routes */}
        {children}
        </body>
    </html>
  )
}
