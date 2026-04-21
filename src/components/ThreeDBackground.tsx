import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const cubesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = null; // Transparent background
    scene.fog = new THREE.Fog(0xffffff, 100, 1000);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x7C3AED, 100, 200);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xEC4899, 80, 150);
    pointLight2.position.set(-50, -50, 50);
    scene.add(pointLight2);

    // Create Floating Cubes
    const cubesArray: THREE.Mesh[] = [];
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    
    for (let i = 0; i < 5; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: 0x7C3AED,
        emissive: 0x5A2FA0,
        shininess: 100,
        wireframe: false,
      });

      const cube = new THREE.Mesh(cubeGeometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );

      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;

      // Store initial rotation for animation
      (cube as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      };

      scene.add(cube);
      cubesArray.push(cube);
    }
    cubesRef.current = cubesArray;

    // Create Particle System
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positionArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 200;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x7C3AED,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate cubes
      cubesArray.forEach((cube) => {
        const speeds = (cube as any).rotationSpeed;
        cube.rotation.x += speeds.x;
        cube.rotation.y += speeds.y;
        cube.rotation.z += speeds.z;

        // Gentle floating motion
        cube.position.y += Math.sin(Date.now() * 0.0005 + cube.position.x) * 0.01;
      });

      // Rotate particles
      if (particles) {
        particles.rotation.y += 0.0002;
      }

      // Soft camera movement
      camera.position.x = Math.sin(Date.now() * 0.0001) * 5;
      camera.position.y = Math.cos(Date.now() * 0.00008) * 5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      containerRef.current?.removeChild(renderer.domElement);
      cubeGeometry.dispose();
      particleMaterial.dispose();
      particleGeometry.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 top-0 left-0 w-full h-screen -z-10 pointer-events-none"
    />
  );
};

export default ThreeDBackground;
