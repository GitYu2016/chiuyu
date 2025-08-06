import React, { useMemo, useState } from "react"
import { GetStaticProps, NextPage } from "next"
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import { NextSeo } from 'next-seo'
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import { useLanguage } from 'lib/i18n/LanguageContext'

const List = styled('div', {
  marginTop: "$4",
})

interface Props {
  tags: string[]
}

const Reading: NextPage<Props> = ({ tags }) => {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('reading-title')} description={t('reading-description')} />
        <PageTile>{t('pages.reading.title')}</PageTile>
        <div className={util.pageColumn()}>
          <p className={util.description()}>{t('reading-intro')}</p>
          <div className={util.divider()}></div>
          <List>
            <p>Coming soon...</p>
          </List>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tags = [
    'all',
  ]

  const props: Props = { tags }

  return {
    props,
    revalidate: 60,
  }
}

export default Reading