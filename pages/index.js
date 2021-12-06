import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test Me Test Me 1,2,3</title>
        <link rel="icon" href="/favicon.ico" />
    <script data-jsd-embedded data-key="bca31543-214d-40ea-84ec-28764127c22d" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js"></script>
      </Head>

      <main>
        <Header title="Welcome to the internet!" />
        <p className="description">
          Get started with some solid stretching and get to the coding <code>Have at it</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
