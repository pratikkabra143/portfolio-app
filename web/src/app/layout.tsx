import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Pratik Kabra',
  description: 'AI & Data Science Engineer | Python Developer | Linux & DevOps Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="w-full">
            <div className="mx-auto max-w-6xl px-6">
              <Navbar />
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}