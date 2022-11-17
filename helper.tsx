//////////////////////////////
//axios generate bearer token/
//////////////////////////////
//axios
//  .post('https://id.twitch.tv/oauth2/token', {
//    client_id: 'twitchid',
//    client_secret: 'twitchsecret',
//    grant_type: 'client_credentials',
//  })
//  .then(function (response) {
//    console.log(response);
//  })
//  .catch((e) => {
//    console.log(e);
//  });

/////////////////////////////////
//axios post data twitch channel/
/////////////////////////////////
//axios
//  .get('https://api.twitch.tv/helix/search/channels?query=nickname', {
//    headers: {
//      'Client-Id': 'twitchid',
//      Authorization: 'Bearer bearertoken',
//    },
//  })
//  .then(function (response) {
//    console.log(response);
//  });

//////////////////////
//fetch data from api/
//////////////////////
//  interface Api {
//    id: string;
//    count: string / number;
//    date: string / number ;
//  }
//
//  useEffect(() => {
//    fetch('http://url/api/')
//      .then((res) => res.json())
//     .then((res) => console.log(res))
//  }, []);
