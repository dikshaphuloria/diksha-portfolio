import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Diksha Phuloria',
  description: 'Analyze, Visualize and Predict Insights From Data With Me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}