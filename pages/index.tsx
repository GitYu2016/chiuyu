import Layout from "@components/Layouts/Global"
import GridList from "@components/GridList"
import { NextSeo } from 'next-seo'
import { useLanguage } from 'lib/i18n/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('title-home')} description={t('home-description')} />
        <GridList />
      </Layout>
    </>
  )
}