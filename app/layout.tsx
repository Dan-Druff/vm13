import './globals.css'
import Header from './components/Header';
import SubHead from './components/SubHead';
import { AuthProvider } from './contexts/AuthContext';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VM13',
  description: 'VM13 Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <SubHead /> 
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
