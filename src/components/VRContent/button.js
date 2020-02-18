import * as THREE from 'three';
import img from "./../../media/glow.png";
import {createGlowMesh, defaultOptions} from "three-glow-mesh";

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

window.AFRAME.registerComponent('nothing', {
    schema:{
        power: {type: "number", default: 500}
    },

    update: function() {
        const options = {
            ...defaultOptions,
            backside: true,
            coefficient: 0.25,
            color: 'white',
            size: 0.5,
            power: this.data.power,
        };
        let el = this.el;
        let geometry = new THREE.SphereGeometry( 1, 64, 64 );
        let material = new THREE.MeshPhysicalMaterial({color: "black"});
        let mesh = new THREE.Mesh(geometry, material);
        const glowMesh = createGlowMesh(geometry, options);
        mesh.add(glowMesh);
        let obj = new window.AFRAME.THREE.Object3D();
        obj.add(mesh);
        el.setObject3D('nothing', obj)
    },
});