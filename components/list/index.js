import Link from 'next/link'
import styles from 'components/list/list.module.scss'
import { useRouter } from 'next/router'

function ArticleList({ articles }) {
  const router = useRouter()
  function filterCover(item) {
    let { coverImagesList } = item
    let coverInfo = coverImagesList.filter((item) => item.coverBool === true)[0]

    if (coverInfo) {
      return coverInfo
    } else {
      return coverImagesList[0]
    }
  }

  return (
    <div className={styles.listWrap}>
      {articles &&
        articles.map((item) => (
          <div
            key={item.id}
            className={styles.item}
            onClick={() =>
              router.push(`/article/${encodeURIComponent(item.id)}`)
            }
          >
            <div className={styles.imgWrap}>
              {filterCover(item)?.url && (
                <img className={styles.img} src={filterCover(item).url} />
              )}
            </div>
            <div className={styles.textWrap}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.other}>
                <span className={styles.time}>{item.publishDate}</span>
                <span className={styles.origin}>{item.origin}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ArticleList
