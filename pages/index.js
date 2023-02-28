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
      <div class="container-fluid">
      <Header title="Welcome Frank! Nothing to see here. Please send your best to Rose" />
      <p>Hello, all and welcome. Please use the form below to access this site. If it appears as though the form does not work then it's likey the case that you should not be here. Pretty ominous huh?
      Hello, all and welcome. Please use the form below to access this site. If it appears as though the form does not work then it's likey the case that you should not be here. Pretty ominous huh?
      Hello, all and welcome. Please use the form below to access this site. If it appears as though the form does not work then it's likey the case that you should not be here. Pretty ominous huh?
      Hello, all and welcome. Please use the form below to access this site. If it appears as though the form does not work then it's likey the case that you should not be here. Pretty ominous huh?
      </p>
</div>
        <p className="description">
          A couple additional options to try. Once you feel like this fits then you can tell them that it ships.</p>
          <div class="container">
  <div class="row text-white text-left pb-3">
    <div class="col bg-dark pt-3">
      1 of 2
    </div>
    <div class="col bg-dark pt-3">
      2 of 2
    </div>
  </div>
  <div class="row text-white text-left pb-3">
    <div class="col bg-secondary pt-3">
      Pretend like you love this please 
    </div>
    <div class="col bg-secondary pt-3">
      Did you see the side of the hamper? as if...
    </div>
    <div class="col bg-secondary pt-3">
      I pity the fool. I pity the shoe. I fool the shoe.
    </div>
  </div>
</div>
    <form name="Contact" method="POST" data-netlify="true">
    <p className="prom">Old school access request</p>
    <input type="hidden" name="form-name" value="Contact" />
  <p>
    <label>Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Access: <select name="role[]" multiple>
      <option value="family">Family</option>
      <option value="friend">Friend</option>
      <option value="professional">Professional</option>
      <option value="new">Guest</option>
    </select></label>
  </p>
  <p>
    <label>Anything Else: <textarea name="message"></textarea></label>
  </p>
  <p>
    <label>username <input type="text" name="username" /></label>
  </p>
  <p>
    <button type="submit">Send it homeboy</button>
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
