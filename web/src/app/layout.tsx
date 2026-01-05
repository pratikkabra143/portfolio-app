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
        {children}
      </body>
    </html>
  )
}