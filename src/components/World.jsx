import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import Plane from "./Plane";
import Player from "./Player";
import Boxx from "./Boxx";
import { useMemo } from "react";

export default function World() {
  const boxes = useMemo(() => {
    const boxes = [...Array(10)].map((_, index) => <Boxx key={index} />);
    return boxes;
  }, []);
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#000000"]} />
      <Physics debug>
        <Lights />
        <Player />
        <Plane />
        {boxes}
      </Physics>
    </>
  );
}
