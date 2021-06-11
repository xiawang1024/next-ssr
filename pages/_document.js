import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="zh-CN" data-content-max>
        <Head />
        <body data-content-max>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
