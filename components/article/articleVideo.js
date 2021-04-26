import styles from 'components/article/article.module.scss'

function ArticleVideo({ article }) {
  return (
    <div className={styles.bd}>
      <video
        className={styles.video}
        src={article.articleAttachmentsList[0].url}
        controls
      ></video>
    </div>
  )
}

export default ArticleVideo
