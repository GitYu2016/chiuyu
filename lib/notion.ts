import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export default notion

// 数据库查询函数
export async function queryDatabase(databaseId: string, sorts?: any[], filter?: any) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: sorts || [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      filter: filter,
    })
    
    return response.results
  } catch (error) {
    console.error('Notion API Error:', error)
    return []
  }
}

// 获取页面内容
export async function getPage(pageId: string) {
  try {
    const response = await notion.pages.retrieve({
      page_id: pageId,
    })
    
    return response
  } catch (error) {
    console.error('Notion API Error:', error)
    return null
  }
} 