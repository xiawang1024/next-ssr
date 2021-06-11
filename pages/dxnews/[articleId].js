/*
 * @Author: xiawang1024
 * @Date: 2021-06-11 16:56:56
 * @LastEditTime: 2021-06-11 22:44:03
 * @LastEditors: xiawang1024
 * @Description:大象新闻文稿中转
 * @FilePath: /next-ssr/pages/dxnews/[articleId].js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Layout from 'components/layout'
import { getArticle } from 'api/cms'

import ArticleText from 'components/articleText'
import ArticleVideo from 'components/articleVideo'
import ArticleAudio from 'components/articleAudio'
import ArticleLive from 'components/articleLive'
import ArticleTopic from 'components/articleTopic'

/**
 * 大象稿件容器
 * @author xiawang1024
 * @date 2021-06-11
 * @param {any} {article}
 * @returns {any}
 */
function DxArticle({ article }) {
  return (
    <Layout article={article}>
      <section>
        <ArticleFilter article={article} />
      </section>
    </Layout>
  )
}

/**
 * 稿件类型分类
 * @author xiawang1024
 * @date 2021-06-11
 * @param {any} {article}
 * @returns {any}
 */
function ArticleFilter({ article }) {
  switch (article.articleType) {
    case 0:
      return <ArticleText article={article}></ArticleText>
    case 1:
      return <ArticleVideo article={article}></ArticleVideo>
    case 2:
      return <ArticleAudio article={article}></ArticleAudio>
    case 3:
      return <ArticleLive article={article}></ArticleLive>
    case 8:
      return <ArticleTopic article={article}></ArticleTopic>
    default:
      return 'no articleType'
  }
}

export async function getStaticProps({ params }) {
  try {
    const {
      data: { result },
    } = await getArticle(params.articleId)

    return {
      props: {
        article: result,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.log(params.articleId, error)
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { articleId: '1399259387108921344' } }],
    fallback: 'blocking',
  }
}

export default DxArticle
