import './globals.css'
import { ApolloProvider } from '@apollo/client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '../components/theme-provider';
import { cn } from '@/lib/utils';
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
       <ClerkProvider>
          <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary", inter.className)}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>

          <ApolloWrapper>{children}</ApolloWrapper>
          </ThemeProvider>
        </body>

          </html>
       </ClerkProvider>
  )
}
