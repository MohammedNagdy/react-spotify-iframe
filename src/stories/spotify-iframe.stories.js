import { userEvent, within, screen } from '@storybook/testing-library';

import { expect } from '@storybook/jest';


import React from 'react';
import SpotifyIframe from '../spotify-iframe';
import { spotifyScriptElementId } from '../consts';



const Template = (args) => {

	return (
  <>
    <h1>Make sure to refresh the page when testing each component to load the spotify scripts properly</h1>
    <SpotifyIframe {...args} />
  </>
  );
};


export const DefaultSpotifyIframe = Template.bind({});
DefaultSpotifyIframe.storyName = 'With Embed Track';
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
    let script;

    setTimeout(async () => {
      script =  document.getElementById(spotifyScriptElementId);
      await expect(
        script
      ).toBeInTheDocument();
  
    }, 5000);
  },
}


export default {
	title: 'SpotifyIframe',
	component: SpotifyIframe,
};
