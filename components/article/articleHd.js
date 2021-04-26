import styles from 'components/article/article.module.scss'

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
