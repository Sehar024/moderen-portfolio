import { useMemo } from "react";
import * as THREE from "three";

export default function Stars() {
  const stars = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 1800; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;

      positions.push(x, y, z);
    }

    return new Float32Array(positions);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={stars.length / 3}
          array={stars}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.035}
        color="#c4b5fd"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
