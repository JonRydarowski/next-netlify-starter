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
    <body>
      <main>
        <Header title="Welcome to the internet!" />
        <p className="description">
          Stretch and get started today </p>
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>   
    <script src="https://jsp8g2gvqw36.statuspage.io/embed/script.js"></script>
      </main>
    <p> Welcome home </p>
    </body>
      <Footer />
  
    </div>
  )
}
