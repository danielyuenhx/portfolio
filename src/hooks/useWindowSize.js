import {useEffect, useState} from 'react'

export default function useWindowSize() {
    // get the width and height of window
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }

    const [windowSize, setWindowSize] = useState(getSize());

    // window onload
    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}