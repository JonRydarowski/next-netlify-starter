import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test Me Test Me 1,2,3</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    <script data-jsd-embedded data-key="bca31543-214d-40ea-84ec-28764127c22d" data-base-url="https://jsd-widget.atlassian.com" src="https://jsd-widget.atlassian.com/assets/embed.js"></script>
    <script type="text/javascript" src="https://dsdsupport.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-dtzt95/b/3/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?jsI18nTransformer=migrated&locale=en-US&collectorId=04a58756"></script>
    </Head>
    <body>
      <main>
        <Header title="Welcome Frank - Nothing to see here." />
        <p className="description">
          Stretch and get started today! It's a great time to get going. </p>
          <div class="row text-white text-center pb-3">
  <div class="col-4 bg-primary pt-3">
    <p>Do you see me?<br />[col-4]</p>
  </div>
  <div class="col-4 bg-dark pt-3">
    <p>I see you! <br />[col-4]</p>
  </div>
  <div class="col-4 bg-secondary pt-3">
    <p>What? <br />[col-4]</p>
  </div>
</div>
    <form name="Contact" method="POST" data-netlify="true">
    <p className="prom"> Pass along some info and we'll read it. </p>
    <input type="hidden" name="form-name" value="Contact" />
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
    <label>Special Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send to Jon</button>
  </p>
</form>
    <script src="https://jsp8g2gvqw36.statuspage.io/embed/script.js"></script>
      </main>
    <p> Welcome home you crazy animal.</p>
    </body>
      <Footer />

    </div>
  )
}
