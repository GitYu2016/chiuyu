import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import * as util from '@styles/util'
import { useLanguage } from 'lib/i18n/LanguageContext'

export default function Posts() {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('posts-title')} description={t('posts-description')} />
        <PageTile>{t('posts-title')}</PageTile>
        <p className={util.description()}>
          {t('posts-intro')}
        </p>
        <div className={util.divider()}></div>
      </Layout>
    </>
  )
}
