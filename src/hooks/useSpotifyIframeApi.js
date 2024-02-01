/**
 * External dependencies
 */
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import {spotifyScriptElementId, spotifyScriptUrl} from '../consts'


/**
 * A custom hook that injects the spotify iframe api
 * script into the DOM and returns the controller of
 * the iframe to allow for further interactions
 * i.e play, pause, togglePlay, and playback_update
 *
 * @param {string} elementId
 * @param {string} width
 * @param {string} height
 * @returns {object} controller of the SpotifyIframeApi
 */
export const useSpotifyIframeApiInit = (elementId, width, height) => {

	const [controller, setController] = useState(null);
	useEffect(() => {
		const script = document.createElement('script');
		script.id = spotifyScriptElementId;
		script.setAttribute('data-testid', spotifyScriptElementId);
		script.src = spotifyScriptUrl;
		document.body.appendChild(script);

		script.onload = () => {
			window.onSpotifyIframeApiReady = (IFrameAPI) => {

				const element = document.getElementById(elementId);
				const options = {
					width,
					height,
				};
				const callback = (EmbedController) => {
					setController(EmbedController);
				};
				IFrameAPI.createController(element, options, callback);
			};
		};

		return () => document.body.removeChild(script);
	}, []);

	return controller;
};
