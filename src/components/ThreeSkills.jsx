import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function SkillMesh({ skill, index, total }) {
  const ref = useRef();
  // position items in a circle
  const radius = 3.0;
  const angle = (index / total) * Math.PI * 2;
  const position = [Math.cos(angle) * radius, Math.sin(angle) * 0.6, Math.sin(angle) * radius * 0.5 * -1];

  const texture = useLoader(THREE.TextureLoader, skill.imageUrl);

  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[1.6, 1.0, 0.2]} />
      <meshStandardMaterial map={texture} toneMapped={false} />
      <Html position={[0, -0.8, 0]} center>
        <div style={{ color: 'white', textAlign: 'center', width: '160px', fontSize: '12px' }}>{skill.name}<br/><small style={{color:'#F1C40F'}}>{skill.subtitle}</small></div>
      </Html>
    </mesh>
  );
}

export default function ThreeSkills({ items }) {
  const total = items.length;
  const bgColor = '#111111';

  return (
    <div style={{ width: '100%', height: '420px' }} className="three-skills">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <color attach="background" args={[bgColor]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <group>
          {items.map((s, i) => (
            <SkillMesh key={s.name} skill={s} index={i} total={total} />
          ))}
        </group>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}
