import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function Document() {
  const sheet = new ServerStyleSheet()

  try {
    return (
      <Html lang="pt-BR">
        <Head>
          {sheet.getStyleElement()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  } finally {
    sheet.seal()
  }
}
