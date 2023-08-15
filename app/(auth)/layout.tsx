import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google"
import { ReactNode } from 'react';
import { dark } from '@clerk/themes';


// Metadata
export const Metadata = {
  title: "Threads",
  description: "hello threads"
}
//inter
const inter = Inter({ subsets: ["latin"] })

function layout({ children: { children: ReactNode } }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}>
      <html lang="en">
        <body className={`${inter.className}`}>
          <h1>welolcom to auth</h1>
        </body>
      </html>
    </ClerkProvider>
  )
}
export default layout


