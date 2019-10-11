import AFRAME from "aframe";
import * as THREE from 'three';

AFRAME.registerComponent('cylinder', {
    schema: {
        color: {default: '#00fffb'},
    },
    update: function(){
        let el = this.el;
        let cylinder = new THREE.CylinderGeometry(10, 10, 10, 64, 64, true, 1.5, 3.5 );
        let material = new THREE.MeshPhongMaterial({color: '#00fffb', wireframe: true, transparent: true, opacity: 0.8, emissive:'#00fffb'});
        let cyl = new THREE.Mesh(cylinder, material);
        let obj2 = new AFRAME.THREE.Object3D();
        obj2.add(cyl);
        el.setObject3D('cylinder', obj2);
    },
});
