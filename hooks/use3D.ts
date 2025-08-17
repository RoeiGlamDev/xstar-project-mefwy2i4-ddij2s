import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for 3D interactions in the luxery dark AirBNB website.
 * This hook utilizes three.js to create engaging interactive 3D elements
 * that reflect the luxurious and high-end design ethos of the brand.
 *
 * @returns {object} - Contains methods to initialize and render the 3D scene.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

    useEffect(() => {
        // Initialize the 3D scene, camera, and renderer
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 1); // Black background for dark design
        document.body.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Create a luxurious 3D object (e.g., a cube with pink sides)
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xff69b4 }); // Pink color
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                document.body.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    };
};