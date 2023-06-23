import './globals.css'
import Header from './Header/page'
// import { Bellefair, Barlow_Condensed } from 'next/font/google'
// you can import google fonts directly and apply them via className//

// export const bellefair = Bellefair({ 
//   weight: ['400'],
//   subsets: ['latin'] 
// })

// export const barlowCondensed = Barlow_Condensed({ 
//   weight: ['400'],
//   subsets: ['latin'] 
// })





export const metadata = {
  title: 'Space Travel',
  description: 'Space tourism website',
}
// render the header component within the body tag since it is to be shared throughout the application.

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* add Nav component here in layout so it can be shared across all routes */}
        <Header />
        {children}
        </body>
    </html>
  )
}
