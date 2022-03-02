import { React, useRef, createRef, useEffect } from 'react'
import {Canvas, useFrame} from "react-three-fiber"
import HomeAnimation from "./HomeAnimation.js"

function Animation() {
    const scrollArea = useRef()
    const onScroll = (e) => (createRef().current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
        <>
            <Canvas linear orthographic camera={{ zoom: 75, position: [0, 0, 500] }}>
                <group>test</group>
            </Canvas>
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
                <div style={{ height: `${1 * 100}vh` }} />
            </div>
        </>
    )
}

export default Animation
