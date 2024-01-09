import {loadGLTF} from "./libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './assets/targets/animals.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const antelope = await loadGLTF("./assets/models/antelope/scene.glb");
    antelope.scene.scale.set(0.5, 0.5, 0.5);
    antelope.scene.position.set(0, -0.4, 0);

    const butterfly = await loadGLTF("./assets/models/butterfly/scene.glb");
    butterfly .scene.scale.set(0.1, 0.1, 0.1);
    butterfly .scene.position.set(0, -0.4, 0);

    const crocodile = await loadGLTF("./assets/models/crocodile/scene.glb");
    crocodile .scene.scale.set(0.1, 0.1, 0.1);
    crocodile .scene.position.set(0, -0.4, 0);

    const dog = await loadGLTF("./assets/models/dog/scene.glb");
    dog.scene.scale.set(0.1, 0.1, 0.1);
    dog.scene.position.set(0, -0.4, 0);

    const elephant = await loadGLTF("./assets/models/elephant/scene.gltf");
    elephant.scene.scale.set(0.1, 0.1, 0.1);
    elephant.scene.position.set(0, -0.4, 0);

    const fish = await loadGLTF("./assets/models/fish/scene.glb");
    fish .scene.scale.set(0.1, 0.1, 0.1);
    fish .scene.position.set(0, -0.4, 0);

    const gorilla = await loadGLTF("./assets/models/gorilla/scene.glb");
    gorilla .scene.scale.set(0.7, 0.7, 0.7);
    gorilla .scene.position.set(0, -0.4, 0);

    const horse = await loadGLTF("./assets/models/horse/scene.glb");
    horse.scene.scale.set(0.1, 0.1, 0.1);
    horse.scene.position.set(0, -0.4, 0);

    const iguana = await loadGLTF("./assets/models/iguana/scene.glb");
    iguana.scene.scale.set(0.1, 0.1, 0.1);
    iguana.scene.position.set(0, -0.4, 0);

    const jaguar = await loadGLTF("./assets/models/jaguar/scene.glb");
    jaguar.scene.scale.set(0.1, 0.1, 0.1);
    jaguar.scene.position.set(0, -0.4, 0);

    const kangaroo = await loadGLTF("./assets/models/kangaroo/scene.gltf");
    kangaroo.scene.scale.set(0.1, 0.1, 0.1);
    kangaroo.scene.position.set(0, -0.4, 0);

    const lion = await loadGLTF("./assets/models/lion/scene.glb");
    lion .scene.scale.set(0.1, 0.1, 0.1);
    lion .scene.position.set(0, -0.4, 0);

    const monkey = await loadGLTF("./assets/models/monkey/scene.glb");
    monkey.scene.scale.set(0.1, 0.1, 0.1);
    monkey.scene.position.set(0, -0.4, 0);

    const numbat = await loadGLTF("./assets/models/numbat/scene.glb");
    numbat.scene.scale.set(0.1, 0.1, 0.1);
    numbat.scene.position.set(0, -0.4, 0);

    const ostrich = await loadGLTF("./assets/models/ostrich/scene.glb");
    ostrich.scene.scale.set(0.1, 0.1, 0.1);
    ostrich.scene.position.set(0, -0.4, 0);

    const penguin = await loadGLTF("./assets/models/penguin/scene.glb");
    penguin.scene.scale.set(0.1, 0.1, 0.1);
    penguin.scene.position.set(0, -0.4, 0);

    const quil = await loadGLTF("./assets/models/quil/scene.glb");
    quil.scene.scale.set(0.1, 0.1, 0.1);
    quil.scene.position.set(0, -0.4, 0);

    const rhino = await loadGLTF("./assets/models/rhino/scene.glb");
    rhino.scene.scale.set(0.1, 0.1, 0.1);
    rhino.scene.position.set(0, -0.4, 0);

    const sloth = await loadGLTF("./assets/models/sloth/scene.glb");
    sloth.scene.scale.set(0.1, 0.1, 0.1);
    sloth.scene.position.set(0, -0.4, 0);

    const turtle = await loadGLTF("./assets/models/turtle/scene.glb");
    turtle.scene.scale.set(0.1, 0.1, 0.1);
    turtle.scene.position.set(0, -0.4, 0);

    const whale = await loadGLTF("./assets/models/whale/scene.glb");
    whale.scene.scale.set(0.1, 0.1, 0.1);
    whale.scene.position.set(0, -0.4, 0);




    const zebra = await loadGLTF("./assets/models/zebra/scene.glb");
    zebra.scene.scale.set(0.1, 0.1, 0.1);
    zebra.scene.position.set(0, -0.4, 0);

    const antelopeAnchor = mindarThree.addAnchor(0);
    antelopeAnchor.group.add(antelope.scene);

    const butterflyAnchor = mindarThree.addAnchor(1);
    butterflyAnchor.group.add(butterfly.scene);

    const crocodileAnchor = mindarThree.addAnchor(2);
    crocodileAnchor.group.add(crocodile.scene);

    const dogAnchor = mindarThree.addAnchor(3);
    dogAnchor.group.add(dog.scene);

    const elephantAnchor = mindarThree.addAnchor(4);
    elephantAnchor.group.add(elephant.scene);

    const fishAnchor = mindarThree.addAnchor(5);
    fishAnchor.group.add(fish.scene);

    const gorillaAnchor = mindarThree.addAnchor(6);
    gorillaAnchor.group.add(gorilla.scene);

    const horseAnchor = mindarThree.addAnchor(7);
    horseAnchor.group.add(horse.scene);

    const iguanaAnchor = mindarThree.addAnchor(8);
    iguanaAnchor.group.add(iguana.scene);

    const jaguarAnchor = mindarThree.addAnchor(9);
    jaguarAnchor.group.add(jaguar.scene);

    const kangarooAnchor = mindarThree.addAnchor(10);
    kangarooAnchor.group.add(kangaroo.scene);

    const lionAnchor = mindarThree.addAnchor(11);
    lionAnchor.group.add(lion.scene);

    const monkeyAnchor = mindarThree.addAnchor(12);
    monkeyAnchor.group.add(monkey.scene);

    const numbatAnchor = mindarThree.addAnchor(13);
    numbatAnchor.group.add(monkey.scene);


    const ostrichAnchor = mindarThree.addAnchor(14);
    ostrichAnchor.group.add(ostrich.scene);

    const penguinAnchor = mindarThree.addAnchor(15);
    penguinAnchor.group.add(penguin.scene);

    const quilAnchor = mindarThree.addAnchor(16);
    quilAnchor.group.add(quil.scene);

    const rhinoAnchor = mindarThree.addAnchor(17);
    rhinoAnchor.group.add(rhino.scene);

    const slothAnchor = mindarThree.addAnchor(18);
    slothAnchor.group.add(sloth.scene);

    const turtleAnchor = mindarThree.addAnchor(19);
    turtleAnchor.group.add(turtle.scene);

    const whaleAnchor = mindarThree.addAnchor(19);
    whaleAnchor.group.add(whale.scene);

    const zebraAnchor = mindarThree.addAnchor(26);
    zebraAnchor.group.add(zebra.scene);


    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});