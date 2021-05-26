import axios from 'axios'

const request = axios.create({
  baseURL: 'https://pubmob.dianzhenkeji.com',
  timeout: 10000,
})

export const getArticles = ({ channelCode, page = 1, limit = 20 }) => {
  console.log(
    `/cms/articles?tenantId=DXNews&channelId=${channelCode}&pageNo=${page}&pageSize=${limit}`
  )
  return request({
    method: 'get',
    url: `/cms/articles?tenantId=DXNews&channelId=${channelCode}&pageNo=${page}&pageSize=${limit}`,
  })
}

export const getArticle = (articleId) =>
  request({
    method: 'get',
    url: `/cms/articlewithrelated?articleId=${articleId}&tenantId=DXNews`,
  })
