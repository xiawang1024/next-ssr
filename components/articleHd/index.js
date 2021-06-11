/*
 * @Author: your name
 * @Date: 2021-06-11 21:29:07
 * @LastEditTime: 2021-06-11 21:35:45
 * @LastEditors: Please set LastEditors
 * @Description: 文稿公共头部
 * @FilePath: /next-ssr/components/articleHd/index.js
 */
import styles from 'components/articleHd/index.module.scss'

function ArticleHd({ article }) {
  return (
    <div className={styles.hd}>
      <h2 className={styles.title}>{article.articleTitle}</h2>
      <p className={styles.other}>
        <span className={styles.time}>{article.publishTime}</span>
        <span className={styles.origin}>{article.articleOriginDescrption}</span>
      </p>
    </div>
  )
}
export default ArticleHd
