import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

export default function Player() {
  const playerRef = useRef();
  useEffect(() => {
    playerRef.current.applyImpulse({ x: 4, y: 0, z: 0 }, true);
  }, []);
  return (
    <RigidBody
      ref={playerRef}
      colliders={false}
      enabledRotations={[false, false, false]}
      position={[0, 2, 0]}
      friction={0}
    >
      <CapsuleCollider args={[0.3, 0.5]} />
      <mesh>
        <capsuleGeometry args={[0.5, 0.5, 6, 10]} />
        <meshStandardMaterial color={[1, 0, 0]} />
      </mesh>
    </RigidBody>
  );
}
