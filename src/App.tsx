import axios from 'axios';
import { useEffect, useState } from 'react';

function Api() {
  useEffect(() => {
    axios
      .get('https://api.twitch.tv/helix/search/channels?query=demonzz1', {
        headers: {
          'Client-Id': 'a8zd41qo7i4xgl1dgfl2cy0uv1m77y',
          Authorization: 'Bearer k1a2zlfpl5u2o371fztpxh7fjwgb0h',
        },
      })
      .then(function (response) {
        console.log(response);
      });
  }, []);

  return <></>;
}

export default Api;

// id = a8zd41qo7i4xgl1dgfl2cy0uv1m77y
// secret = tigc22pvtfbuin6fw04z40hued6rtx
