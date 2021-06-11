import axios from 'axios'

const request = axios.create({
  baseURL: 'https://pubmod.hntv.tv/mobile',
  timeout: 10000,
})
//pubmod.hntv.tv/mobile/cms/articlewithrelated?articleId=1398974402900660224

export const getArticle = (articleId) =>
  request({
    method: 'get',
    url: `/cms/articlewithrelated`,
    params: {
      articleId,
    },
  })
