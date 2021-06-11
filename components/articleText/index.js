/*
 * @Author: your name
 * @Date: 2021-04-26 15:41:01
 * @LastEditTime: 2021-06-11 21:50:59
 * @LastEditors: xiawang1024
 * @Description: 图文类型
 * @FilePath: /next-ssr/components/articleText/index.js
 */
import styles from 'components/articleText/index.module.scss'

function ArticleText({ article }) {
  return (
    <div className={styles.bd}>
      <article
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: article.contentBody }}
      ></article>
    </div>
  )
}

export default ArticleText
