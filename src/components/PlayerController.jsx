import { useEffect, useRef } from "react";
import Player from "./Player";
import { useFrame } from "@react-three/fiber";
import { useRapier } from "@react-three/rapier";

export default function PlayerControler(params) {
  const playerRef = useRef();
  const rapierWorld = useRapier();

  useEffect(() => {
    // console.log(char);
    // setTimeout(() => {
    //   playerRef.current.applyImpulse({ x: 2, y: 0, z: 0.0 }, true);
    // }, 5000);
  }, []);

  useFrame((state, delta) => {
    // char.computedMovement();
    // playerRef.current.applyImpulse(
    //   { x: state.clock.getElapsedTime() / 10, y: 0, z: 0 },
    //   true,
    // );
    // console.log(playerRef.current);
  });
  return <Player ref={playerRef} />;
}
