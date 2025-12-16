import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

const outerSize = 1;
const innerSize = 0.85;
const depth = 0.15;

function createEdgesGeometry() {
  // Create hollow frame shape
  const shape = new THREE.Shape();
  shape.moveTo(-outerSize, -outerSize);
  shape.lineTo(outerSize, -outerSize);
  shape.lineTo(outerSize, outerSize);
  shape.lineTo(-outerSize, outerSize);
  shape.closePath();

  const hole = new THREE.Path();
  hole.moveTo(-innerSize, -innerSize);
  hole.lineTo(innerSize, -innerSize);
  hole.lineTo(innerSize, innerSize);
  hole.lineTo(-innerSize, innerSize);
  hole.closePath();
  shape.holes.push(hole);

  // Extrude to give depth
  const frameGeometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
  });
  frameGeometry.translate(0, 0, -depth / 2);

  // Create wireframe edges
  return new THREE.EdgesGeometry(frameGeometry);
}

function Star({ targetTiltX, targetTiltY }: { targetTiltX: number; targetTiltY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const tiltX = useRef(0);
  const tiltY = useRef(0);
  const rotationZ = useRef(0);

  useFrame(() => {
    if (!groupRef.current) return;

    tiltX.current += (targetTiltX - tiltX.current) * 0.35;
    tiltY.current += (targetTiltY - tiltY.current) * 0.35;
    rotationZ.current += 0.0018;

    groupRef.current.rotation.x = tiltX.current;
    groupRef.current.rotation.y = tiltY.current;
    groupRef.current.rotation.z = rotationZ.current;
  });

  const edgesGeometry = useMemo(() => createEdgesGeometry(), []);
  const color = '#7aa2f7';

  return (
    <group ref={groupRef}>
      {/* Frame 1: Standard orientation (wireframe) */}
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color={color} />
      </lineSegments>
      {/* Frame 2: Rotated 45° (wireframe) */}
      <lineSegments geometry={edgesGeometry} rotation-z={Math.PI / 4}>
        <lineBasicMaterial color={color} />
      </lineSegments>
    </group>
  );
}

export function StarCanvas() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const MAX_TILT = 0.4;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setTilt({ x: y * MAX_TILT, y: x * MAX_TILT });
  };

  const handlePointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ width: '100%', height: '100%' }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Star targetTiltX={tilt.x} targetTiltY={tilt.y} />
      </Canvas>
    </div>
  );
}
