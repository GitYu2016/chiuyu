import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import GridTile from "@components/Tiles/GridTile"
import * as util from '@styles/util'
import { styled } from 'stitches.config'
import { useLanguage } from 'lib/i18n/LanguageContext'
import projectsData from '../db/projects.json'

const Grid = styled('div', {
  display: 'grid',
  gap: '$4',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  '@mo': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
  },
})

export default function Projects({ list }: any) {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('projects-title')} description={t('projects-description')} />
        <PageTile>{t('projects-title')}</PageTile>
        <p className={util.description()}>{t('projects-intro')}</p>
        <div className={util.divider()}></div>
        <div className={util.inset()}>
          <Grid>
            {list && list.map((item: any) => (
              <GridTile
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                content={item.description}
                url={item.url}
              />
            ))}
          </Grid>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      list: projectsData,
    },
  }
}
