import AFRAME from "aframe";
import * as THREE from 'three';

import obj_rsc from "./../media/obj.obj";
import mtl_rsc from "./../media/obj_mtl.mtl";

AFRAME.registerComponent('modelsofa', {
    schema: {
        color: {default: '#FFD700'},
        size: {type: 'int', default: 5}
    },
    update: function(){
        let el = this.el;
        // Model/material loading!
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load(mtl_rsc, function(materials){

            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);

            objLoader.load(obj_rsc, function(mesh){

                mesh.traverse(function(node){
                    if( node instanceof THREE.Mesh ){
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });

                let obj = new AFRAME.THREE.Object3D();
                obj.add(mesh);
                el.setObject3D('modelsofa', obj);
            });

        });

    },
});
