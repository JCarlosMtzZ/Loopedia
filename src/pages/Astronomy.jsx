import React, {Suspense, useEffect, useRef, useState} from 'react'
import '../css/Astronomy.css'
import NavBar from "../Components/NavBar.jsx"
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import * as THREE from "three"
import { OrbitControls } from '@react-three/drei'
import planetData from "../Components/planetData.jsx"
import suntexture from "../img/PlanetTextures/sunTexture.png"


const apiKey = "JG92Aw10a9YLwjZ27GROTirgE6j7qnB9VeMUClvz"
//const apiKey = process.env.REACT_APP_NASA_KEY

function Astronomy() {
    const randomColor = () =>
        `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

    const [photoData, setPhotoData] = useState(null)
    useEffect(() =>{
        fetchPhoto()
        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            )
            const data = await res.json()
            setPhotoData(data)
            console.log(data)
        }
    }, []);
    return(
        <>
            <NavBar/>
            <div className="astronomy">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div>
                {!photoData ? (
                    <h1>No Data</h1>
                    ) : (
                    <div className="photoData">
                        <div className="titleData">
                            <h1>{photoData.title}</h1>
                            <h2>By {photoData.copyright}</h2>
                            <h2>{photoData.date}</h2>
                        </div>
                        <div className="contentData">
                             {photoData.media_type == "image"?(
                                <img src={photoData.url} alt={photoData.title}  className="media"/>
                             ) : (
                                <iframe
                                    title="astronomy-video"
                                    src={photoData.url}
                                    border="0"
                                    gesture="media"
                                    allow="encrypted-media"
                                    allowFullScreen
                                    className="media"
                                />
                             )}
                            <p>{photoData.explanation}</p>
                        </div>
                </div>
            )}
            </div>

        </div>
            <div className="solarSystem">
                <h1>▼ Explore our Solar System ▼</h1>
                <div id="stars1"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
                    <Suspense fallback={null}>
                    <Sun/>
                    {planetData.map((planet) => (
                        <Planet planet={planet} key={planet.id} />
                    ))}
                    <Lights/>
                    <OrbitControls />
                    </Suspense>
                </Canvas>
            </div>
        </>
    );
}
function Sun(){
    const texture = useLoader(THREE.TextureLoader, suntexture)
    const sunRef = React.useRef()
    useFrame(({ clock }) => {
        sunRef.current.rotation.y += 0.005
    });
    return(
        <mesh ref={sunRef}>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}
function Planet({planet: {
    xRadius,
    zRadius,
    size,
    speed,
    offset,
    rotationSpeed,
    textureMap
    }})
{
    const texture = useLoader(THREE.TextureLoader, textureMap)
    const planetRef = React.useRef()
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + offset
        const x = xRadius * Math.sin(t)
        const z = zRadius * Math.cos(t)
        planetRef.current.position.x = x
        planetRef.current.position.z = z
        planetRef.current.rotation.y += rotationSpeed
    });
    return (
        <>
            <mesh ref={planetRef}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial map={texture} />
            </mesh>
            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
        </>
    );
}
function Lights(){
    return(
        <>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
        </>
    )
}
function Ecliptic({ xRadius = 1, zRadius = 1 }) {
    const points = [];
    for (let index = 0; index < 64; index++) {
        const angle = (index / 64) * 2 * Math.PI;
        const x = xRadius * Math.cos(angle);
        const z = zRadius * Math.sin(angle);
        points.push(new THREE.Vector3(x, 0, z));
    }points.push(points[0]);const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return (
        <line geometry={lineGeometry}>
            <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
        </line>
    );
}

export default Astronomy