import { RigidBody } from "@react-three/rapier";

export default function Boxx(props) {
  return (
    <RigidBody
      colliders="cuboid"
      position={[(Math.random() - 0.5) * 50, 2, (Math.random() - 0.5) * 50]}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={[Math.random(), Math.random(), Math.random()]}
        />
      </mesh>
    </RigidBody>
  );
}
