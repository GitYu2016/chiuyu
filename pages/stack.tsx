import Layout from "@components/Layouts/Global"
import { NextSeo } from 'next-seo'
import { useLanguage } from 'lib/i18n/LanguageContext'
import * as util from '@styles/util'
import { styled } from 'stitches.config'
import StackTile from "@components/Tiles/StackTile"
import PageTile from "@components/PageTitle"
import stackData from '../db/stack.json'

const Grid = styled('div', {
  display: 'grid',
  gap: '$4',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  '@mo': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
  },
})

const CategorySection = styled('div', {
  marginBottom: '$6',
})

const CategoryTitle = styled('h2', {
  fontSize: '$4',
  fontWeight: '$4',
  color: '$title',
  marginBottom: '$4',
  paddingBottom: '$2',
  borderBottom: '1px solid $mint6',
})

export default function Stack({ list }: any) {
  const { t } = useLanguage()

  // 按分类分组
  const groupedByCategory = list.reduce((acc: any, item: any) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {})

  // 分类顺序和翻译 key 映射
  const categoryOrder = [
    { key: '个人', translationKey: 'category-personal' },
    { key: '设计', translationKey: 'category-design' },
    { key: '开发', translationKey: 'category-development' },
    { key: '建模', translationKey: 'category-modeling' }
  ]

  return (
    <>
      <Layout>
        <NextSeo title={t('stack-title')} description={t('stack-description')} />
        <PageTile>{t('stack-title')}</PageTile>
        <p className={util.description()}>{t('stack-intro')}</p>
        <div className={util.inset()}>
          {categoryOrder.map(({ key, translationKey }) => {
            const items = groupedByCategory[key]
            if (!items || items.length === 0) return null

            return (
              <CategorySection key={key}>
                <CategoryTitle>{t(translationKey)}</CategoryTitle>
                <Grid>
                  {items.map((item: any) => (
                    <StackTile 
                      key={item.id}
                      title={item.name}
                      content={t(`stack-${item.name.toLowerCase().replace(/\s+/g, '-')}-desc`)}
                      url={item.url}
                    />
                  ))}
                </Grid>
              </CategorySection>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // 过滤只显示使用中的工具，并按 id 排序
  const filteredList = stackData
    .filter(item => item.use === true)
    .sort((a, b) => parseInt(a.id) - parseInt(b.id))
  
  return {
    props: {
      list: filteredList,
    },
  }
}