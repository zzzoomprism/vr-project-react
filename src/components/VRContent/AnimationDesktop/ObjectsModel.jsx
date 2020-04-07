import React, {Fragment} from "react";
import sofa from "../../../media/models/Koltuk.obj";
import sofa3 from "../../../media/models/sofa.obj";
import sofaModern from "./../../../media/models/bed.obj";
import table from "./../../../media/models/table.obj";
import chairs from "./../../../media/models/DesignChair1.obj";


const ObjectsModel = (props) => (
    <Fragment>
    <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
              scale={"4 4 4"} position={"10 14 9"}
              animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; "}
              animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
    <a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"60 -190 60"}
scale={"6 6 6"} position={"-10 15 15"}
animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
          scale={"0.05 0.05 0.05"} position={"15 20 -9"}
          animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
          animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
scale={"6 6 6"} position={"-15 11 -10"}
animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
          scale={"0.05 0.05 0.05"} position={"1 20 10"}
          animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
          animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
scale={"6 6 6"} position={"-3 25 -5"}
animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true;dir: reverse;"}/>



<a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
          scale={"4 4 4"} position={"10 -14 9"}
          animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; "}
          animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + table + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"60 -190 60"}
scale={"6 6 6"} position={"-10 -25 15"}
animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + chairs + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
          scale={"3 3 3"} position={"15 -20 -9"}
          animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
          animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + sofaModern + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
scale={"0.05 0.05 0.05"} position={"-15 -18 -10"}
animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + sofa3 + ");"} material={"color: white; wireframe: true; opacity: 0; "}  rotation={"20 0 40"}
          scale={"0.05 0.05 0.05"} position={"1 -20 10"}
          animation__step5={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 2000;"}
          animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true; dir: reverse;"}/>
<a-entity obj-model={"obj: url(" + sofa + ");"} material={"color: white; wireframe: true; opacity: 0;"}  rotation={"0 -190 0"}
scale={"6 6 6"} position={"-3 -25 -5"}
animation__step3={"property: material.opacity; from: 0; to: 1; dur: 3000; easing: linear; delay: 4000;"}
animation__rotation={"property: rotation; to: 360 360 360; dur: 50000; easing: linear; delay: 4000; loop: true;dir: reverse;"}/>
    </Fragment>
);

export default ObjectsModel;