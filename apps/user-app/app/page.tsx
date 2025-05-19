import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import  Dabluu  from "@repo/ui/Dabluu";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
      <button className="border border-amber-800 p-8 text-7xl" >HELLO</button>
      <text className="text-6xl" >Anuj solaniaa</text>
      <Dabluu></Dabluu>
    </div>
  )
}