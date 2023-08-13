import { Inter } from "next/font/google"
import { ReactNode } from 'react';
export const Metadata = {
  title: "Threads",
  description: "hello threads"

}
const inter = Inter({ subsets: ["latin"] })

function layout({ children: { children: ReactNode } }) {
  return (
    <html lang="en">``
      <body className= {`${inter.className} bg-slate-600`}>
           <h1>Hello layout</h1>
      </body>
    </html>

  )
}

export default layout


