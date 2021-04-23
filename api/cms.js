import axios from 'axios'

const request = axios.create({
  baseURL: process.env.CMS_API,
  timeout: 10000,
})

export const getArticles = ({ channelCode, page, limit }) =>
  request.get(
    `/cms/articles?tenantId=henanradio&channelId=${channelCode}&pageNo=${page}&pageSize=${limit}`
  )

export const getArticle = (articleId) =>
  request.get(
    `/cms/articlewithrelated?articleId=${articleId}&tenantId=henanradio`
  )
