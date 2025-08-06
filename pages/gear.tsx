import Layout from "@components/Layouts/Global"
import { NextSeo } from 'next-seo'
import { useLanguage } from 'lib/i18n/LanguageContext'
import * as util from '@styles/util'
import { styled } from 'stitches.config'
import GearTile from "@components/Tiles/GearTile"
import PageTile from "@components/PageTitle"
import gearData from '../db/gear.json'

const Grid = styled('div', {
  display: 'grid',
  gap: '$4',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  '@mo': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
  },
})

export default function Gear({ list }: any) {
  const { t } = useLanguage()

  return (
    <>
      <Layout>
        <NextSeo title={t('gear-title')} description={t('gear-description')} />
        <PageTile>{t('gear-title')}</PageTile>
        <p className={util.description()}>{t('gear-intro')}</p>
        <div className={util.divider()}></div>
        <div className={util.inset()}>
          <Grid>
            {list && list.map((item: any) => (
              <GearTile key={item.id} {...item} />
            ))}
          </Grid>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  try {
    // 过滤只显示使用中的装备
    const filteredList = gearData.filter((item: any) => item.use === true)
    
    return {
      props: {
        list: filteredList || [],
      },
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {
        list: [],
      },
    }
  }
}