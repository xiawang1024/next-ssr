/*
 * @Author: xiawang1024
 * @Date: 2021-06-11 21:31:15
 * @LastEditTime: 2021-06-11 21:42:17
 * @LastEditors: xiawang1024
 * @Description: 短视频类型
 * @FilePath: /next-ssr/components/articleVideo/index.js
 */

import styles from 'components/articleVideo/index.module.scss'

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
