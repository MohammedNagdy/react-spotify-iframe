import { spotifyScriptUrl } from "./consts"

export const addSpotifyScript = () => {
    return new Promise((res, rej) => {
        const script = 
            document.querySelector('script[name="spotify-iframe-script"]') || document.createElement('script');
        script.onload = res;
        script.onerror = rej;
        script.src = spotifyScriptUrl;
        script.async = true;

        // Add it only once
        if (!document.querySelector('script[name="spotify-iframe-script"]'))
            document.body.append(script);
    });
}

