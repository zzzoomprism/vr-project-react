import AFRAME from "aframe";
import * as THREE from 'three';

AFRAME.registerComponent('button', {
    schema: {
        color: {default: '#FFF'},
        size: {type: 'int', default: 5},
        id: {type: 'string', default: 'none'}
    },

    update: function(){
        let group = new THREE.Group();
        let el = this.el;
        let material = new THREE.MeshBasicMaterial({color: '#fff', side: THREE.DoubleSide, transparent: true, opacity: 0.6});
        console.log(this.group);
        //the biggest ring
        let segment = 0;
        for(let i = 0; i < 2; i++){
            segment+=3;
            let geometry = new THREE.RingGeometry(0.54, 0.57, 32, 32, segment , 2.3);
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = -0.5;
            group.add(mesh);
        }

        segment = 1;
        for(let i = 0; i < 2; i++){
            segment+=3;
            let geometry = new THREE.RingGeometry(0.60, 0.62, 32, 32, segment , 2.5);
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = -0.52;
            group.add(mesh);
        }



        //three part of ring
        segment = 0;
        for(let i = 0; i < 3; i++)
        {
            segment+=2;
            let geometry = new THREE.RingGeometry(0.40, 0.5, 32, 32, segment , 1);
            let material = new THREE.MeshBasicMaterial({color: '#00fffb', side: THREE.DoubleSide, transparent: true, opacity: 0.6});
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = -0.45;
            group.add(mesh);
        }


        //many small rings
        segment = 0;
        for(let i = 0; i <= 20; i++) {
            segment+=0.3;
            let geometry = new THREE.RingGeometry(0.35, 0.38, 32, 32, segment, 0.15);
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.z = -0.43;
            group.add(mesh);
        }

        let geometry = new THREE.RingGeometry(0.33, 0.34, 32, 32);
        material = new THREE.MeshBasicMaterial({color: '#00fffb', side: THREE.DoubleSide, transparent: true, opacity: 0.6});
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = -0.41;
        group.add(mesh);

        geometry = new THREE.RingGeometry(0.29, 0.31, 32, 32, 1, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.z = -0.40;
        group.add(mesh);

        let obj = new AFRAME.THREE.Object3D();
        obj.add(group);
        this.group = group;
        this.animation(this.group);
        el.setObject3D('button', obj);
    },


    animation(group){
        requestAnimationFrame(this.animation.bind(this, group));
        for(let i = 0; i < 2; i++){
            group.children[i].geometry.verticesNeedUpdate = true;
            let circle = group.children[i].geometry.parameters;
                    group.children[i].rotation.z += Math.cos(Math.random())/10;
        }

        for(let i = 2; i < 4; i++){
            group.children[i].geometry.verticesNeedUpdate = true;
            group.children[i].rotation.z -= 0.02;

        }

        for(let i = 4; i < 7; i++){
            group.children[i].geometry.verticesNeedUpdate = true;
                group.children[i].rotation.z -= 0.03;
        }

        for(let i = 7; i <= 27; i++){
            group.children[i].geometry.verticesNeedUpdate = true;
            for(let t = 0;  t < 100; t+=0.03){
                group.children[i].rotation.z += Math.sin(t);
            }
        }
        group.children[29].rotation.z -= Math.sin(Math.random())/10;

    }
});
