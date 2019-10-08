import AFRAME from "aframe";
import * as THREE from 'three';

AFRAME.registerComponent('bar', {
    schema: {
        color: {default: '#FFF'},
        size: {type: 'int', default: 5}
    },
    update: function(){
        let el = this.el;
        var starsGeometry = new THREE.Geometry();
        var starsMaterial = new THREE.PointsMaterial({size: 1, sizeAttenuation: false});
        var angle = 0;
        var radius = 10;
        for(var i = 0; i<10000; i++){
            var vertex = new THREE.Vector3();

            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            vertex.x = radius * Math.sin(phi) * Math.cos(theta);
            vertex.y = radius * Math.sin(phi) * Math.sin(theta);
            vertex.z = radius * Math.cos(phi);
            starsGeometry.vertices.push(vertex);
        }
        let stars = new THREE.Points(starsGeometry, starsMaterial);
        let obj = new AFRAME.THREE.Object3D();
        obj.add(stars);
        el.setObject3D('bar', obj);
    },
});
