import styles from 'components/article/article.module.scss'

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
