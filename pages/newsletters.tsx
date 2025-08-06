import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import GridTile from "@components/Tiles/GridTile"
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import { useLanguage } from 'lib/i18n/LanguageContext'

const Grid = styled('div', {
  display: 'grid',
  gridGap: '$1',
  gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
  gridAutoRows: '1fr',
  '@mo': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
  },
})

export default function Newsletters({ list }) {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('newsletters-title')} description={t('newsletters-description')} />
        <PageTile>{t('newsletters-title')}</PageTile>
        <p className={util.description()}>
          {t('newsletters-intro')}
        </p>
        <div className={util.divider()}></div>
        <Grid>
          {list?.map((item) => (
            <GridTile
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.name}
              content={item.description}
              url={item.url}
            />
          ))}
        </Grid>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // 返回空数组，因为删除了 newsletters.json
  return {
    props: {
      list: [],
    },
  }
}
