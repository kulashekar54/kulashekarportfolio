"use client";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });
const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });

export default function ClientShell() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
    </>
  );
}
