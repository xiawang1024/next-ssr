import styles from 'styles/pages/m.module.scss'
import { getArticles } from 'api/cms.js'
import ArticleList from 'components/list/index.js'
import useOnScreen from 'hooks/useOnScroll.js'
import { useRef, useEffect } from 'react'
const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((res) => res.result.content)
import { useSWRInfinite } from 'swr'

const PAGE_SIZE = 20

function NewsList({ list }) {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // reached the end
    return `https://pubmob.dianzhenkeji.com/cms/articles?tenantId=DXNews&channelId=1202503537666428928&pageNo=${
      pageIndex + 1
    }&pageSize=${PAGE_SIZE}` // SWR key
  }
  const { data, error, isValidating, size, setSize } = useSWRInfinite(
    getKey,
    fetcher,
    {
      initialData: [list],
    }
  )

  const loadMore = useRef()
  const isVisible = useOnScreen(loadMore)
  const isEmpty = data?.[0]?.length === 0
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE)
  const isRefreshing = isValidating && data && data.length === size

  useEffect(() => {
    if (isVisible && !isRefreshing && !isReachingEnd) {
      setSize(size + 1)
    }
  }, [isVisible, isRefreshing])

  return (
    <section className={styles.news}>
      <h2>DX NEWS LIST</h2>
      {isEmpty ? <p>no data </p> : null}
      <article>
        {data &&
          data.map((articles, index) => (
            <ArticleList articles={articles} key={index} />
          ))}
      </article>
      <footer className={styles.pages}>
        <button className={styles.moreBtn} ref={loadMore}>
          {isLoadingMore
            ? 'loading...'
            : isReachingEnd
            ? 'no more data'
            : 'load more data'}
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
