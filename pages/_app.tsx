import React from "react"
import Head from "next/head"
import { AppProps } from 'next/app'
import Menu from "@components/Menu"
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { globalStyles } from '@styles/global'
import '@styles/reset.css'
import { LanguageProvider } from 'lib/i18n/LanguageContext'
import LanguageToggle from '@components/LanguageToggle'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <LanguageProvider>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        </Head>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <DefaultSeo {...SEO} />
          <LanguageToggle />
          <main>
            <Menu />
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </>
    </LanguageProvider>
  )
}
