/*
 * @Author: xiawang1024
 * @Date: 2021-06-11 20:44:38
 * @LastEditTime: 2021-06-11 21:55:56
 * @LastEditors: xiawang1024
 * @Description:大象稿件布局
 * @FilePath: /next-ssr/components/layout/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Head from 'next/head'
import styles from 'components/layout/index.module.scss'

export default function Layout({ children, article }) {
  return (
    <div className={styles.body}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
        <title>{article.articleTitle}</title>
        <meta name="keywords" content={article.seoKeywords}></meta>
        <meta name="description" content={article.seoDescription}></meta>
      </Head>
      {children}
    </div>
  )
}
