import styles from 'styles/pages/m.module.scss'
import { useState } from 'react'
import { getArticles } from 'api/cms.js'
import ArticleList from 'components/list/index.js'

function NewsList({ list }) {
  const [page, setPage] = useState(2)
  const [articles, setArticles] = useState(list)
  const [channelId, setChannelId] = useState(list[0].channelId)
  async function loadData() {
    setPage(page + 1)
    const {
      data: {
        result: { content },
      },
    } = await getArticles({ channelCode: channelId, page })
    setArticles([...articles, ...content])
  }
  return (
    <section className={styles.news}>
      <h2>DX NEWS LIST</h2>
      <article>
        <ArticleList articles={articles} />
      </article>
      <footer className={styles.pages}>
        <button onClick={loadData} className={styles.moreBtn}>
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
