'use client'
import { Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const SphereWireframe = () => {
	const sphereRef = useRef<any>()

	useFrame(() => {
		if (sphereRef.current) {
			sphereRef.current.rotation.y -= 0.005
		}
	})

	return (
		<Sphere ref={sphereRef} args={[1, 10, 10]} scale={2.5}>
			<meshBasicMaterial color="black" wireframe />
			<mesh>
				<sphereGeometry args={[0.99, 10, 10]} />
				<meshBasicMaterial color="white" />
			</mesh>
			{/* Filled sections */}
			{[...Array(2)].map((_, i) => (
				<mesh key={i} rotation-y={Math.PI * 2 * (i / 5)}>
					<sphereGeometry args={[1.001, 10, 10]} />
					<meshBasicMaterial color="black" transparent opacity={0.5} />
				</mesh>
			))}
		</Sphere>
	)
}

export const Globe = () => (
	<Canvas style={{ width: '130px', height: '130px' }}>
		<SphereWireframe />
	</Canvas>
)
