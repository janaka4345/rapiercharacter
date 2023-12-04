import { CameraControls, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import Plane from "./Plane";
import PlayerController from "./PlayerController";
import Boxx from "./Boxx";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function World() {
  const cameraRef = useRef();
  const boxes = useMemo(() => {
    const boxes = [...Array(10)].map((_, index) => <Boxx key={index} />);
    return boxes;
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      // cameraRef.current.rotateTo(Math.PI / 2, Math.PI / 4, true);
      // await
      // await cameraRef.current.rotateTo(Math.PI / 2, Math.PI / 4, true);
      // await cameraRef.current.dollyTo(3, true);
      // await cameraRef.current.truck(5, 0, true);
      // await cameraRef.current.setTarget(0, 0, 0, true);
    }, 5000);
    // await cameraRef.fitToSphere(mesh, true);
  }, []);
  useFrame((state, delta) => {});
  // const t = new Vector3();
  // cameraRef.current.getPosition(t);
  // console.log(t);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <axesHelper args={[2]} />
      <color attach="background" args={["#000000"]} />
      {/* <CameraControls ref={cameraRef} /> */}
      <Physics debug>
        <Lights />
        <PlayerController />
        <Plane />
        {boxes}
      </Physics>
    </>
  );
}
