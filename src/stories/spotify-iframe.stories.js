import React from 'react';
import SpotifyIframe from '../spotify-iframe';


export const Template = (args) => {
	return <SpotifyIframe {...args} />;
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
};

export const DefaultSpotifyIframe = Template.bind({});
DefaultSpotifyIframe.storyName = 'With Embed';
DefaultSpotifyIframe.args = {
	id: '1',
  spotifyId:"5ChkMS8OtdzJeqyybCc9R5",
  type:"track",
  height:'100',
  width:'100%',
};

export const AlbumSpotifyIframe = Template.bind({});
AlbumSpotifyIframe.storyName = 'With Embed Album';
AlbumSpotifyIframe.args = {
	id: '2',
  spotifyId:"1C2h7mLntPSeVYciMRTF4a",
  type:"album",
  height:'100',
  width:'100%',
};

export default {
	title: 'SpotifyIframe',
	component: SpotifyIframe,
};
