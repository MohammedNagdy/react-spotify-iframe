import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';


import * as SpotifyIframe from '../src/stories/spotify-iframe.stories';
import { spotifyScriptElementId } from '../src/consts';


// Make sure the spotify script is added to the DOM

const { DefaultSpotifyIframe, AlbumSpotifyIframe } = composeStories(SpotifyIframe);



test('Test if the spotify iframe API script attached', () => {
    const {container} = render(<DefaultSpotifyIframe />);

    // const isScriptAttached = container.quer(spotifyScriptElementId);
    // expect(isScriptAttached).toBeInTheDocument();
});


// test('Test if the spotify iframe component is rendered', () => {
//     render(<DefaultSpotifyIframe />);
  
//     const buttonElement = screen.getByRole('button', {
//       name: 'Submit',
//     });
  
//     fireEvent.click(buttonElement);
  
//     const isFormValid = screen.getByLabelText('invalid-form');
//     expect(isFormValid).toBeInTheDocument();
//   });