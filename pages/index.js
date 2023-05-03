import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome home scott</title>
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
    <script>
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

        // This function creates anonymous visitor IDs in Pendo unless you change the visitor id field to use your app's values
        // This function uses the placeholder 'ACCOUNT-UNIQUE-ID' value for account ID unless you change the account id field to use your app's values
        // Call this function after users are authenticated in your app and your visitor and account id values are available
        // Please use Strings, Numbers, or Bools for value types.
        pendo.initialize({
            visitor: {
                id:              'guest-first-one-rydarowski'   // Required if user is logged in, default creates anonymous ID
                email:        'jon@rydarowski.com'
                // full_name:    // Recommended if using Pendo Feedback
                // role:         // Optional

                // You can add any additional visitor level key-values here,
                // as long as it's not one of the above reserved names.
            },

            account: {
                id:           'jon-rydarowski' // Required if using Pendo Feedback, default uses the value 'ACCOUNT-UNIQUE-ID'
                // name:         // Optional
                // is_paying:    // Recommended if using Pendo Feedback
                // monthly_value:// Recommended if using Pendo Feedback
                // planLevel:    // Optional
                // planPrice:    // Optional
                // creationDate: // Optional

                // You can add any additional account level key-values here,
                // as long as it's not one of the above reserved names.
            }
        });
})('c7521485-8a07-4603-7595-9f859527411a');
</script>
    </Head>
    <body>
      <div class="skippy overflow-hidden">
        <div class="container-xl">
        </div>
      </div>
      <div class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
        <div class="container-fluid">
          <div class="row flex-xl-nowrap">
          <main>
          <div class="container-xl">
  <div class="row text-white text-left pb-3">
    <div class="col bg-dark pt-3">
    <Header title="Welcome Frank!"/>
    <h2 id="subtitle">Welcome to Thunderdome!</h2>
        <p className="description">
          A couple additional options to try. Once you feel like this fits then you can tell them that it ships.</p>
    <p>Hello, all and welcome. Please use the form below to access this site. If it appears as though the form does not work then it's likey the case that you should not be here. Pretty ominous huh?
      Hello, all and welcome. Please use the form below to access this site. If it appears as though the form does not work then it's likey the case that you should not be here. Pretty ominous huh?
      </p>
    </div>
  </div>
  <div class="row justify-content-center text-black text-left pb-3">
    <div class="col-2">
    <div class="media">
  <img src="/ava.png" class="img-fluid" alt="..."></img>
    </div>
    </div>
    <div class="col-2">
    <div class="media">
  <img src="/max.png" class="img-fluid" alt="..."></img>
    </div>
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
      </div>
      </div>
      </body>
      <Footer />
    </div>
  )
}
