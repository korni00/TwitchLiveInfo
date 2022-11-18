import axios from 'axios';
import { ButtonProps, BoxProps } from '@mui/material';

import { useState, useEffect, FC } from 'react';
import Typography from '@mui/material/Typography';
import { LiveWrapper, LiveHandler, CustomIframe } from './TwitchItem.style';

interface TwitchData extends ButtonProps {
  broadcaster_name: string;
  game_name: string;
  title: string;
}

interface TwitchResponse {
  data: TwitchData[];
}

interface TwitchItem extends BoxProps {
  broadcasterid: number;
}

const TwitchItem: FC<TwitchItem> = ({ broadcasterid, ...rest }) => {
  const [data, setData] = useState<TwitchData[] | []>([]);
  const twitchUrl = `https://api.twitch.tv/helix/channels?broadcaster_id=${broadcasterid}`;

  const getTwitchData = async () => {
    try {
      const res = await axios<TwitchResponse>({
        url: twitchUrl,
        timeout: 4000,
        method: 'get',
        headers: {
          'client-id': 'a8zd41qo7i4xgl1dgfl2cy0uv1m77y',
          Authorization: 'Bearer k1a2zlfpl5u2o371fztpxh7fjwgb0h',
        },
      });
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data.data);
      }
    } catch (err) {
      console.error('twitch error: ', err);
    }
  };

  useEffect(() => {
    getTwitchData();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <a href={`https://www.twitch.tv/${item.broadcaster_name}`} target='_blank'>
          <LiveHandler>
            <CustomIframe src={`https://player.twitch.tv/?${item.broadcaster_name}&parent=localhost`} />
            <LiveWrapper key={index}>
              <Typography variant='h3'>{item.title}</Typography>
              <Typography variant='h4'>{item.broadcaster_name}</Typography>
              <Typography variant='h5'>{item.game_name}</Typography>
            </LiveWrapper>
          </LiveHandler>
        </a>
      ))}
    </>
  );
};
export default TwitchItem;
