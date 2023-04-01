import Head from 'next/head'

export default function Home() {
  
// var CLIENT_ID = '905694888986-jln4ifm94rqi57ktsekiiqqnllsh4rtm.apps.googleusercontent.com'; // Insira o ID do cliente aqui
// var API_KEY = 'AIzaSyAiJgKXvvSW4mAmX2_4b-Xb3Ba07Nq7YxA'; // Insira a chave de API aqui
// var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/fitness/v1/rest"];
// var SCOPES = 'https://www.googleapis.com/auth/fitness.activity.read';

  return (
    <>
    <div id="g_id_onload"
        data-client_id="905694888986-jln4ifm94rqi57ktsekiiqqnllsh4rtm.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="https://seed-walkers-dapp.vercel.app"
        data-auto_prompt="false">
    </div>

    <div class="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with."
        data-size="large"
        data-logo_alignment="left">
    </div>

    </>
  )
}
