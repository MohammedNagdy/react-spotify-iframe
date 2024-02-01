import { userEvent, within, screen } from '@storybook/testing-library';

import { expect } from '@storybook/jest';


import React from 'react';
import SpotifyIframe from '../spotify-iframe';
import { spotifyScriptElementId } from '../consts';



const Template = (args) => {
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

// Test if the script is loaded in the dom
export const LoadSpotifyScript = {
  play:  async ({ canvasElement }) => {
    
    const script =  screen.getByTestId(spotifyScriptElementId);

    await expect(
      script
    ).toBeInTheDocument();
  },
}


export default {
	title: 'SpotifyIframe',
	component: SpotifyIframe,
};
