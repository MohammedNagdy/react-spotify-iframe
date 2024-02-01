import React, { useEffect } from "react"
import PropTypes from 'prop-types'
import { useSpotifyIframeApiInit } from "./hooks/useSpotifyIframeApi";


// Spotify Embed id, and type episode, track, album etc.
// Height and width
const SpotifyIframe = ({
    id,
    spotifyId,
    type,
    height,
    width,
    emitController = () => {}
    }) => {
    
    // Inject the spotify iframe api script
    const controller = useSpotifyIframeApiInit(id, width, height);

    // Load the video based on change of the Spotify id
    useEffect(() => {
        if (controller) {
            controller.loadUri(`spotify:${type}:${spotifyId}`);

            // Use the emit controller to pass the EmbedController
            // to the parent component for more interactions
            emitController(controller);
        }
    }, [controller, spotifyId, type])

    return <div id={id} />
};

export default SpotifyIframe;


SpotifyIframe.propTypes = {
    id: PropTypes.string,
    spotifyId: PropTypes.string,
    type: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string ,
    emitController: PropTypes.func,
}