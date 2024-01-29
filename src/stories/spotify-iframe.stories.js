import SpotifyIframe from '../spotify-iframe';

export default {
  component: SpotifyIframe,
};

/*
 * 
 */
export const Primary = {
  render: () => 
        <SpotifyIframe 
            id="1" 
            spotifyId=""
            type=""
            height={200}
            width={200} 
        />,
};
