/*
 * @Author: xiawang1024
 * @Date: 2021-06-11 21:31:15
 * @LastEditTime: 2021-06-11 22:38:54
 * @LastEditors: xiawang1024
 * @Description: 短视频类型
 * @FilePath: /next-ssr/components/articleAudio/index.js
 */

import styles from 'components/articleAudio/index.module.scss'

function ArticleAudio({ article }) {
  return (
    <div className={styles.bd}>
      <audio className={styles.audio} src={article.media} controls></audio>
    </div>
  )
}

export default ArticleAudio
