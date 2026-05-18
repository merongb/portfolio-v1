import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

function MatrixField({ count = 60, area = 10 }) {
  const phrases = useMemo(() => [
    'git clone', 'rm -rf', 'npm install', 'yarn add', 'git commit -m "init"',
    'sudo apt-get update', 'docker run', 'kubectl apply -f', 'curl -sS', 'ssh user@host',
    'npm run dev', 'git pull', 'git push', 'chmod +x', 'node server.js',
    'pip install', 'brew install', 'serve -s build'
  ], []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const phrase = phrases[Math.floor(Math.random() * phrases.length)];
      arr.push({
        pos: [ (Math.random() - 0.5) * area, (Math.random() - 0.5) * (area * 0.4), (Math.random() - 0.5) * area ],
        vel: [ (Math.random() - 0.5) * 0.8, -0.2 - Math.random() * 0.8, (Math.random() - 0.5) * 0.8 ],
        rot: Math.random() * 2 - 1,
        phrase,
        size: 0.08 + Math.random() * 0.18,
      });
    }
    return arr;
  }, [count, area, phrases]);

  const refs = useRef([]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.pos[0] += p.vel[0] * delta * 1.2;
      p.pos[1] += p.vel[1] * delta * 1.2;
      p.pos[2] += p.vel[2] * delta * 1.2;

      if (p.pos[1] < -(area * 0.5)) {
        p.pos[1] = area * 0.5;
        p.pos[0] = (Math.random() - 0.5) * area;
        p.pos[2] = (Math.random() - 0.5) * area;
        p.phrase = phrases[Math.floor(Math.random() * phrases.length)];
      }

      const ref = refs.current[i];
      if (ref) {
        ref.position.set(p.pos[0], p.pos[1], p.pos[2]);
        ref.rotation.y += p.rot * delta * 0.5;
        const scale = 0.95 + 0.05 * Math.sin(t * 2 + i);
        ref.scale.setScalar(scale);
      }
    }
  });

  return (
    <group>
      {particles.map((p, i) => (
        <Text
          key={i}
          ref={(el) => (refs.current[i] = el)}
          position={p.pos}
          fontSize={p.size}
          color="#F1C40F"
          anchorX="center"
          anchorY="middle"
        >
          {p.phrase}
        </Text>
      ))}
    </group>
  );
}

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isMobile || prefersReduced) {
    return (
      <div style={{ width: '100%', height: '220px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hero-3d">
        <div style={{ textAlign: 'center', color: '#F1C40F' }}>
          <h1 style={{ margin: 0, fontSize: '1.6rem' }}>Meron Gebrehiwet</h1>
          <p style={{ margin: 0, opacity: 0.8 }}>Full-stack Developer</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '420px', background: '#111' }} className="hero-3d">
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }} dpr={1}>
        <color attach="background" args={["#111111"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <MatrixField count={60} area={12} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
