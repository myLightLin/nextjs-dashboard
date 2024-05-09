import {Metadata} from 'next'
import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard',
  },
  description: 'The Official Next.js Course Dashboard, built with App Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: ['Next.js', 'Dashboard', 'React', 'React Hooks', 'Vercel'],
  authors: [{name: 'lightlin', url: 'https://github.com/myLightLin'}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
