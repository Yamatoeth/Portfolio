import { useRef, useMemo, Suspense, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import HeroBackgroundFallback from './HeroBackgroundFallback';

class ErrorBoundary extends Component<{ children: ReactNode, fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Hero3D Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const ParticleField = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  
  // Create 5000 random points in a sphere
  const sphere = useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 1.2 * Math.cbrt(Math.random()); // Radius around 1.2
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        temp[i * 3] = x;
        temp[i * 3 + 1] = y;
        temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    // Rotate the entire cloud
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6" // Primary blue-ish
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 -z-0 opacity-40 hover:opacity-100 transition-opacity duration-1000">
      <ErrorBoundary fallback={<HeroBackgroundFallback />}>
        <Canvas camera={{ position: [0, 0, 1] }} gl={{ failIfMajorPerformanceCaveat: true }}>
          <Suspense fallback={null}>
              <ParticleField />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default Hero3D;
