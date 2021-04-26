import Link from 'next/link'
import styles from 'components/list/list.module.scss'

function ArticleList({ articles }) {
  function filterCover(item) {
    let { coverImagesList } = item
    let coverInfo = coverImagesList.filter((item) => item.coverBool === true)[0]

    console.log(coverInfo)
    if (coverInfo) {
      return coverInfo
    } else {
      return coverImagesList[0]
    }
  }
  console.log(filterCover(articles[0]))
  return (
    <div className={styles.listWrap}>
      {articles &&
        articles.map((item) => (
          <div key={item.id}>
            <Link href={`/cmsid/${encodeURIComponent(item.id)}`}>
              <a className={styles.item}>
                <div className={styles.imgWrap}>
                  <img className={styles.img} src={filterCover(item).url} />
                </div>
                <div className={styles.textWrap}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.other}>
                    <span className={styles.time}>{item.publishDate}</span>
                    <span className={styles.origin}>{item.origin}</span>
                  </p>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default ArticleList
