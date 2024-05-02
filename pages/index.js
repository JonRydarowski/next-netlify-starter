import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style>
        body {
            width: 100%;
            height: 100%;
            background-image: url('https://assets.crawco.com/photos/_fullWidth/global-innovations-hero.jpg');
            background-repeat: no-repeat;         
}
    </style>
  </head>
  <body>
    <div></div>
    <!-- 1. Load the webchat.js bundle via a script tag -->
    <script src="https://github.com/Cognigy/WebchatWidget/releases/download/v3.0.0-beta.22/webchat.js"></script>
    <script>
        initWebchat(
            "https://endpoint-app-us.cognigy.ai/cec175b2e3c3e163731fed0a18a9293e1d759b8e35f26994561e9b5046091d4c"
        );
    </script>
  </body>
    </div>
  )*/
}
