import mercury from '../img/PlanetTextures/mercuryTexture.jpg'
import venus from '../img/PlanetTextures/venusTexture.jpg'
import earth from '../img/PlanetTextures/earthTexture.jpg'
import mars from '../img/PlanetTextures/marsTexture.jpg'
import jupiter from '../img/PlanetTextures/jupiterTexture.jpg'
import saturn from '../img/PlanetTextures/saturnTexture.jpg'
import uranus from '../img/PlanetTextures/uranusTexture.jpg'
import neptune from '../img/PlanetTextures/neptuneTexture.jpg'

const random = (a, b) => a + Math.random() * b
const textures = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
const planetData = []
const sp = 1

planetData.push({
    id: 0,
    xRadius: (0 + 1.5) * 4,
    zRadius: (0 + 1.5) * 2,
    size: 0.4,
    speed: 1 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[0]
});
planetData.push({
    id: 1,
    xRadius: (1 + 1.5) * 4,
    zRadius: (1 + 1.5) * 2,
    size: 0.7,
    speed: 0.73 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[1]
});

planetData.push({
    id: 2,
    xRadius: (2 + 1.5) * 4,
    zRadius: (2 + 1.5) * 2,
    size: 0.8,
    speed: 0.62 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[2]
});
planetData.push({
    id: 3,
    xRadius: (3 + 1.5) * 4,
    zRadius: (3 + 1.5) * 2,
    size: 0.6,
    speed: 0.5 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[3]
});
planetData.push({
    id: 4,
    xRadius: (4 + 1.5) * 4,
    zRadius: (4 + 1.5) * 2,
    size: 1.5,
    speed: 0.27 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[4]
});
planetData.push({
    id: 5,
    xRadius: (5 + 1.5) * 4,
    zRadius: (5 + 1.5) * 2,
    size: 1.3,
    speed: 0.2 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[5]
});
planetData.push({
    id: 6,
    xRadius: (6 + 1.5) * 4,
    zRadius: (6 + 1.5) * 2,
    size: 1.1,
    speed: 0.14 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[6]
});
planetData.push({
    id: 7,
    xRadius: (7 + 1.5) * 4,
    zRadius: (7 + 1.5) * 2,
    size: 1,
    speed: 0.11 * sp,
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.005, 0.05),
    textureMap: textures[7]
});

export default planetData;
/*
const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
    `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;7

const textures = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
const planetData = [];
const totalPlanets = 8;
for (let index = 0; index < totalPlanets; index++) {
    planetData.push({
        id: index,
        color: randomColor(),
        xRadius: (index + 1.5) * 4,
        zRadius: (index + 1.5) * 2,
        size: random(0.5, 1),
        speed: random(0.5, 0.2),
        offset: random(0, Math.PI * 2),
        rotationSpeed: random(0.005, 0.05),
        textureMap: textures[index]
    });
}
 */