import AFRAME from "aframe";
import * as THREE from 'three';

let group;

AFRAME.registerComponent('button', {
    schema: {
        color: {default: '#FFF'},
        size: {type: 'int', default: 5}
    },
    update: function(){
        let el = this.el;
        let material = new THREE.MeshBasicMaterial({color: '#fff', side: THREE.DoubleSide, transparent: true, opacity: 0.6});
        group = new THREE.Group();
        let segment = 0;
        for(let i = 0; i < 3; i++)
        {
            segment+=2;
            let geometry = new THREE.RingGeometry(0.40, 0.5, 32, 32, segment , 1);
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = -0.45;
            group.add(mesh);
        }
        segment=0;
        for(let i = 0; i < 2; i++){
            segment+=3;
            let geometry = new THREE.RingGeometry(0.53, 0.56, 32, 32, segment , 2.3);
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = -0.5;
            group.add(mesh);
        }
        segment = 0;
        for(let i = 0; i <= 20; i++) {
            segment+=0.3;
            let geometry = new THREE.RingGeometry(0.35, 0.38, 32, 32, segment, 0.15);
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = -0.43;
            group.add(mesh);
        }

        let obj = new AFRAME.THREE.Object3D();
        obj.add(group);
        this.animation();
        el.setObject3D('button', obj);
    },


    animation(){
        requestAnimationFrame(this.animation.bind(this));
        for(let i = 0; i < 3; i++){
            group.children[i].geometry.verticesNeedUpdate = true;
            let circle = group.children[i].geometry.parameters;
            for(let t = 0; t < 6; t+= 0.001) {
                group.children[i].rotation.z += t;
            }
        }
    }
});
