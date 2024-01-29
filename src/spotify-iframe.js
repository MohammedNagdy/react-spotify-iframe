import { forwardRef } from "react"
import { useMount } from 'react-use';


const SpotifyIframe = forwardRef((props), ref => {
    // Spotify Embed id, and type episode, track, album etc.
    // Height and width
    const {
        id,
        spotifyId,
        type,
        height,
        width,
        onControllerCreate,
    } = props;

    const uri = `spotify:${type}:${spotifyId}`;

    const options = {
        width: width,
        height: height,
        uri: uri
    };
    const onCreateCallback = (EmbedController) => {
        EmbedController.loadUri(uri);
        onControllerCreate(EmbedController);
    };

    useMount(() => {
        // Add the spotify script
        addSpotifyScript();
        window.IFrameAPI.createController(ref.current, options, onCreateCallback);
    })

    return <div ref={ref} id={id}></div>
});

export default SpotifyIframe;
