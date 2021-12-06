import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
    <script data-jsd-embedded data-key="bca31543-214d-40ea-84ec-28764127c22d" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js">
    </script>
  )
}
