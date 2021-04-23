import axios from 'axios'

const request = axios.create({
  baseURL: 'https://pubmob.dianzhenkeji.com',
  timeout: 10000,
})

export const getArticles = ({ channelCode, page = 1, limit = 10 }) =>
  request({
    method: 'get',
    url: `/cms/articles?tenantId=henanradio&channelId=${channelCode}&pageNo=${page}&pageSize=${limit}`,
  })

export const getArticle = (articleId) =>
  request({
    method: 'get',
    url: `/cms/articlewithrelated?articleId=${articleId}&tenantId=henanradio`,
  })
