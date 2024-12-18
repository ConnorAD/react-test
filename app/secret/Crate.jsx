/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 crate.glb 
Author: Blender3D (https://sketchfab.com/Blender3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/basic-crate-b5b4395ecfa4429eba168823f41bdbe2
Title: Basic Crate
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CrateModel(props) {
  const { nodes, materials } = useGLTF('/crate.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/crate.glb')
