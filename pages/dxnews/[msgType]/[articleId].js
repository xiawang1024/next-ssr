import Head from 'next/head'
import { getArticle } from 'api/cms'

function DxArticle({ result }) {
  return (
    <section>
      <Head>
        <title>{result.articleTitle}</title>
      </Head>
      <article
        dangerouslySetInnerHTML={{ __html: result.contentBody }}
      ></article>
    </section>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
  const {
    data: { result },
  } = await getArticle(params.articleId)

  return {
    props: {
      result,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { articleId: '' } }],
    fallback: 'blocking',
  }
}

export default DxArticle
