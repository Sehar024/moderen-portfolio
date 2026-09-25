import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Stars from "./Stars";

function FloatingShape() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.25;
      meshRef.current.rotation.y = time * 0.35;

      meshRef.current.position.x =
        Math.sin(time * 0.7) * 0.15;

      meshRef.current.position.y =
        Math.cos(time * 0.8) * 0.15;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={1.5}
    >
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />

        <MeshTransmissionMaterial
          transmission={1}
          thickness={1}
          roughness={0.15}
          chromaticAberration={0.08}
          anisotropy={0.5}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.15}
          color="#8b5cf6"
        />
      </mesh>
    </Float>
  );
}

function PurpleOrb() {
  return (
    <mesh position={[0, 0, -3]}>
      <sphereGeometry args={[3, 64, 64]} />

      <meshStandardMaterial
        color="#4c1d95"
        transparent
        opacity={0.12}
        emissive="#7c3aed"
        emissiveIntensity={1}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />

        <pointLight
          position={[4, 4, 4]}
          intensity={20}
          color="#a78bfa"
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={10}
          color="#7c3aed"
        />

        <Stars />

        <PurpleOrb />

        <FloatingShape />

        <Environment preset="night" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}
