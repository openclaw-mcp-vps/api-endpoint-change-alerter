import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Endpoint Change Alerter — Monitor APIs for Breaking Changes',
  description: 'Continuously monitors API endpoints and alerts developers when response schemas change or endpoints break. Never be surprised by a breaking API change again.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="db5b38e7-7b7c-48e8-a187-2d11b47298f9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
