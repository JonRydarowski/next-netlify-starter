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
    <script type="text/javascript" src="https://dsdsupport.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-dtzt95/b/3/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?jsI18nTransformer=migrated&locale=en-US&collectorId=04a58756"></script>
    <script type="text/javascript" src="https://chat-api.spartez-software.com/chat.js"></script> 
    </Head>
    <body>
      <main>
        <Header title="Welcome to the internet!" />
        <p className="description">
          Stretch and get started today </p>
    <script src="https://jsp8g2gvqw36.statuspage.io/embed/script.js"></script>
    <script type="text/javascript">
    var spartezSupportChat = {
        portal: 1,
        cloud: {
            jiraId: 'ef37f3ce-01a1-3f37-b48e-782a3beab8d3',
            jiraUrl: 'https://dsdsupport.atlassian.net',
            urls: {
                rest: 'https://chat-api.spartez-software.com',
                ws: 'https://chat-ws.spartez-software.com'
            },
        },
    }
</script>
      </main>
</body>
      <Footer />
    </div>
  )
}
