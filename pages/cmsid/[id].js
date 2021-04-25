import Head from 'next/head'
import { getArticle } from 'api/cms.js'
import styles from 'styles/pages/cmsid.module.scss'

function Article({ result }) {
  return (
    <section className={styles.article}>
      <Head>
        <title>{result.articleTitle}</title>
      </Head>
      <h2>Article Detail</h2>
      <h3 className={styles.title}>{result.articleTitle}</h3>
      <article
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: result.contentBody }}
      ></article>
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
    paths: [{ params: { id: '1385422093025415168' } }],
    fallback: 'blocking',
  }
}

export default Article
