import { CapsuleCollider, RigidBody } from "@react-three/rapier";

export default function Player() {
  return (
    <RigidBody
      colliders={false}
      enabledRotations={[false, false, false]}
      position={[0, 2, 0]}
    >
      <CapsuleCollider args={[0.3, 0.5]} />
      <mesh>
        <capsuleGeometry args={[0.5, 0.5, 6, 10]} />
        <meshStandardMaterial color={[1, 0, 0]} />
      </mesh>
    </RigidBody>
  );
}
