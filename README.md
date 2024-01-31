# react-spotify-iframe
Lightweight library for handling interactions with the Spotify iframe like play, pause, seek and much more interactions.


### Installation
`$ npm install react-spotify-iframe`

### Usage
The main advantage of the react-spotify-iframe component that it provides right out of the box controller for each iframe to allow for seperation
in the iframes controls in terms of interactions.
```javascript

import SpotifyIframe from 'react-spotify-iframe';

...
const ExampleComponent = (props) => {
    ..
    const [controller, setController] = useState(null);
    ...

    const playHandler = () {
        controller.play(); // Many more interactions can be viewed in the official docs
    }
    ...
    return (
        <div>
            ...
            <SpotifyIframe
                id='<iframe-id>'
                spotifyId="<spotify-id>"
                type="<type:episode|track|album>" // just use one of them
                height='<default-height:100>'
                width='<defautl-width:100%>'
                emitController={setController}
            />
            ...
        </div>
    )
}

```

To get more interactions please visit the official docs of the Spotify IframeApi at https://developer.spotify.com/documentation/embeds/references/iframe-api.

Make sure you have a premium account on Spotify to allow for seemless interactions with your iframe for your users. However, this library can work with free acounts as well.

### Issues
Please post your issue with details as much as possible.

### Contribution
This library is under MIT License PRs are welcomed.