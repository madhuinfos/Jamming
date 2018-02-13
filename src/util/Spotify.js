
let accessToken = '';
let clientID = 'ccebe5f855004815bbcac56f822da2de';
let redirectUri = 'http://localhost:3000/';

const Spotify ={
  readAccessToken(){
    let url = window.location.href;
    let token = url.match(/access_token=([^&]*)/);
    let expiration = url.match(/expires_in=([^&]*)/);

    if(token && expiration){
      accessToken = token;

      window.setTimeout(() => accessToken = '', expiration[1] * 1000);
      window.history.pushState('Access Token', null, '/');
    }
  },

  getAccessToken(){
    if(accessToken){
      return accessToken;
    }
    else{
      Spotify.readAccessToken();
      if(!accessToken){
        window.location = "https://accounts.spotify.com/authorize?client_id=" +clientID+"&response_type=token&scope=playlist-modify-public&redirect_uri="+redirectUri;
      }
      else {
          return accessToken[1];
      }
    }
  },

  async search(searchTerm){
    try{
      let token = Spotify.getAccessToken();
      let response = await fetch('https://api.spotify.com/v1/search?type=track&q='+searchTerm, {
        headers: {
          'Authorization': 'Bearer ' +token
        }
      });
      if(response.ok){
        let jsonResponse = await response.json();
        console.log(jsonResponse);
      }
    }
    catch(e){
      console.log(e);
    }
}

};

export default Spotify;
