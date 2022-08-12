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
   
    </Head>
      <main>
        <Header title="Welcome to the internet!" />
        <p className="description">
          Stretch and get started today </p>
    <script src="https://jsp8g2gvqw36.statuspage.io/embed/script.js"></script>
      </main>
      <Footer />
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
        }
        //meta: [ // optional, custom metadata to store in the issue created from conversation.
        //    { render: true, name: "Value Name 1", value: val1 }, // "render" values will be displayed in the chat dashboard
        //    { render: false, name: "Value Name 2", value: val2 },
        //],
        // delay: 100, // delay between page load and chat load in milliseconds
        // container: 'spartez-support-chat-container', // ID of the page element that will be replaced by chat
        // iconClass: '', // additional class added to the chat icon
        // chatClass: '', // additional class added to the chat widget
        // locale: 'en-us' // force a specified locale for displaying texts to the user
                           // instead of detecting it from the browser
    }
</script>
<script type="text/javascript" src="https://chat-api.spartez-software.com/chat.js"></script>
    </div>
  )
}
