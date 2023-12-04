import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function Player(props, playerRef) {
  const three = useThree();
  const playerCol = useRef();
  const rapierWorld = useRapier();
  let char = "";
  useEffect(() => {
    // console.log(char);
    // setTimeout(() => {
    //   playerRef.current.applyImpulse({ x: 2, y: 0, z: 0.0 }, true);
    // }, 5000);
    // console.log(char);
  }, []);
  useFrame((state, delta) => {
    // char = rapierWorld.world.createCharacterController(0.01);
    // char.computeColliderMovement(
    //   playerCol, // The collider we would like to move.
    //   { x: 10, y: 0, z: 0 }, // The movement we would like to apply if there wasn’t any obstacle.
    // );
    // console.log(three.pointer);
    // char.computedMovement();
    // playerRef.current.applyImpulse(
    //   { x: state.clock.getElapsedTime() / 10, y: 0, z: 0 },
    //   true,
    // );
    // console.log(playerRef.current);
  });
  return (
    <RigidBody
      // type="kinematicVelocity"
      ref={playerRef}
      colliders={false}
      // enabledRotations={[false, false, false]}
      position={[0, 2, 0]}
      friction={0.7}
      // linearVelocity={[10, 0, 0]}
    >
      <CapsuleCollider ref={playerCol} args={[0.3, 0.5]} />
      <mesh>
        <capsuleGeometry args={[0.5, 0.5, 6, 10]} />
        <meshStandardMaterial color={[1, 0, 0]} />
      </mesh>
    </RigidBody>
  );
});
