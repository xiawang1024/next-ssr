import styles from 'styles/pages/m.module.scss'
import { getArticles } from 'api/cms.js'
import ArticleList from 'components/list/index.js'
const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((res) => res.result.content)
import { useSWRInfinite } from 'swr'

function NewsList({ list }) {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    return `https://pubmob.dianzhenkeji.com/cms/articles?tenantId=DXNews&channelId=1202503537666428928&pageNo=${
      pageIndex + 1
    }&pageSize=20` // SWR key
  }
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    initialData: [list],
  })

  return (
    <section className={styles.news}>
      <h2>DX NEWS LIST</h2>

      <article>
        {data &&
          data.map((articles, index) => (
            <ArticleList articles={articles} key={index} />
          ))}
      </article>
      <footer className={styles.pages}>
        <button onClick={() => setSize(size + 1)} className={styles.moreBtn}>
          加载更多
        </button>
      </footer>
    </section>
  )
}

export async function getStaticProps({ params }) {
  const {
    data: {
      result: { content },
    },
  } = await getArticles({ channelCode: params.id })

  return {
    props: {
      list: content,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1202503537666428928' } }],
    fallback: 'blocking',
  }
}

export default NewsList
