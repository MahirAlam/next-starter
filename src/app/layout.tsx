import "@/styles/globals.css"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  )
}
