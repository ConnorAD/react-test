/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 hangarMedRes.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/hangarMedRes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Exterieur_DOOR_Small_AV_Left.geometry} material={materials.DOOR_Global_V1} position={[13.154, 6.844, -2.593]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Interieur_Door_ARR_Left.geometry} material={materials['MUR DOOR DETAIL INTERIEUR_V1']} position={[-16.622, 2.611, 0]} />
      <mesh receiveShadow geometry={nodes.Protection_Arr.geometry} material={materials['SOL MURET HOUSE PLAK_V1']} position={[-19.242, 0.955, -7.889]} rotation={[-Math.PI / 4, 0, 0]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Shelter_INTERIEUR_V1} />
      <mesh geometry={nodes.Plane_1.geometry} material={materials.SHELTER_EXTERIEUR_V1} />
    </group>
  )
}

useGLTF.preload('/hangarMedRes.glb')
