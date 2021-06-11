/*
 * @Author: xiawang1024
 * @Date: 2021-04-23 10:23:22
 * @LastEditTime: 2021-06-11 22:46:20
 * @LastEditors: xiawang1024
 * @Description:接口
 * @FilePath: /next-ssr/api/cms.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://pubmod.hntv.tv/mobile',
  timeout: 10000,
})
//pubmod.hntv.tv/mobile/cms/articlewithrelated?articleId=1398974402900660224

/**
 * 获取文稿详情
 * @author xiawang1024
 * @date 2021-06-11
 * @param {any} articleId
 * @returns {any}
 */
export const getArticle = (articleId) =>
  request({
    method: 'get',
    url: `/cms/articlewithrelated`,
    params: {
      articleId,
    },
  })
