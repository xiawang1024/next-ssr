import Head from 'next/head'
import { getArticle } from 'api/cms.js'
import styles from 'styles/pages/cmsid.module.scss'
import ArticleHd from 'components/article/articleHd.js'
import ArticleText from 'components/article/articleText.js'
import ArticleVideo from 'components/article/articleVideo.js'

function Article({ result }) {
  function ArticleType({ articleShowStyle }) {
    switch (articleShowStyle) {
      case 1:
        return <ArticleText article={result} />
      case 8:
        return <ArticleVideo article={result} />
    }
  }

  return (
    <section className={styles.article}>
      <Head>
        <title>{result.articleTitle}</title>
      </Head>
      <h2>Article Detail</h2>
      <ArticleHd article={result} />
      {/* <ArticleText article={result} /> */}

      <ArticleType articleShowStyle={result.articleShowStyle} />
    </section>
  )
}

export async function getStaticProps({ params }) {
  const {
    data: { result },
  } = await getArticle(params.id)
  return {
    props: { result },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1386504056171794432' } }],
    fallback: 'blocking',
  }
}

export default Article
