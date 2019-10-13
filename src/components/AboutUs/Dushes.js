import AFRAME from "aframe";
import * as THREE from 'three';

AFRAME.registerComponent('dushes', {
    schema: {
        color: {default: '#FFF'},
    },
    update: function(){
        let el = this.el;
        // let group = new THREE.Group();
        // let geometry = new THREE.SphereGeometry(0.02, 32,32);
        // let material = new THREE.MeshPhongMaterial({color: '#fff', transparent: true, opacity: 0.9, emissive: '#fff'});
        // let star = new THREE.Mesh(geometry, material);
        // group.add(star);
        //
        // let geo2 = new THREE.SphereGeometry(0.04, 32, 32);
        // let mat2 = new THREE.MeshPhongMaterial({color: '#fff', transparent:true, opacity: 0.2, emissive: '#fff'});
        // let mesh = new THREE.Mesh(geo2, mat2);
        // group.add(mesh);
    },
});
