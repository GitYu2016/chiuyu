import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // 尝试不同的 API 端点
    const result = await fetch(
      `https://api.github.com/users/yinchiuyu`, // 临时使用 GitHub API 作为测试
      {
        method: 'GET',
      }
    )

    if (!result.ok) {
      return res.status(500).json({ 
        error: 'Failed to fetch data',
        count: 0 
      })
    }

    const data = await result.json()
    
    // 临时返回一个测试值
    return res.status(200).json({
      count: 123 // 临时测试值
    })
  } catch (error) {
    return res.status(500).json({ 
      error: 'API error',
      count: 0 
    })
  }
}