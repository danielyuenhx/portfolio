import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import { softShadows, Box, OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import html from '../textures/html.jpg'
import php from '../textures/php.png'
import react from '../textures/react.png'
import tailwind from '../textures/tailwind.png'
import flask from '../textures/flask.png'
import bootstrap from '../textures/bootstrap.png'

function Scene() {
    const htmlTexture = useLoader(TextureLoader, html)
    const phpTexture = useLoader(TextureLoader, php)
    const reactTexture = useLoader(TextureLoader, react)
    const tailwindTexture = useLoader(TextureLoader, tailwind)
    const flaskTexture = useLoader(TextureLoader, flask)
    const bootstrapTexture = useLoader(TextureLoader, bootstrap)

    const mesh = useRef(null);
    useFrame(() => {
        mesh.current.rotation.x += 0.005
        mesh.current.rotation.y += 0.01
    })

    return (
        <>
            <ambientLight intensity={1.3} />
            <mesh ref={mesh}>
                <boxBufferGeometry attach="geometry" />
                <meshPhongMaterial map={htmlTexture} attachArray="material" />
                <meshPhongMaterial map={phpTexture} attachArray="material" />
                <meshPhongMaterial map={reactTexture} attachArray="material" />
                <meshPhongMaterial map={tailwindTexture} attachArray="material" />
                <meshPhongMaterial map={flaskTexture} attachArray="material" />
                <meshPhongMaterial map={bootstrapTexture} attachArray="material" />
            </mesh>
            <OrbitControls />
        </>
    )
}

function Animation() {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </>
    )
}

export default Animation

