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
        for(var i = 0; i<1000; i++){
            var vertex = new THREE.Vector3();
            vertex.x += Math.random()*Math.sin(Math.random()*5-1);
            vertex.y += Math.random()*Math.cos(Math.random()*5-1);
            vertex.z += Math.random()*Math.sin(Math.random()*5-1);
            starsGeometry.vertices.push(vertex);
        }
        let stars = new THREE.Points(starsGeometry, starsMaterial);
        let obj = new AFRAME.THREE.Object3D();
        obj.add(stars);
        el.setObject3D('bar', obj);
    },
});
