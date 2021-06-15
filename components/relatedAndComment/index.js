/*
 * @Author: xiawang1024
 * @Date: 2021-06-15 08:43:51
 * @LastEditTime: 2021-06-15 08:45:53
 * @LastEditors: xiawang1024
 * @Description:通用相关新闻及评论
 * @FilePath: /next-ssr/components/relatedAndComment/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import styles from 'components/relatedAndComment/index.module.scss'

function RelatedAndComment({ article }) {
  return (
    <div className={styles.wrap}>
      <h1>相关新闻及评论</h1>
    </div>
  )
}
export default RelatedAndComment
