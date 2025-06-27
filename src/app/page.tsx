"use client"
import Image from "next/image"
import Link from "next/link"
import First_Section from "./(homepage)/components/First_Section"
import Second_Section from "./(homepage)/components/Second_Section"
import Third_Section from "./(homepage)/components/Third_Section"
import Fourth_Section from "./(homepage)/components/Fourth_Section"
import Fifth_Section from "./(homepage)/components/Fifth_Section"
import Six_Section from "./(homepage)/components/Six_Section"
import Seventh_Section from "./(homepage)/components/Seventh_Section"
import Footer from "@/shared/footer"

 const Home : React.FC = () => {
  return (
    <main className="min-h-screen">
      <First_Section
      />
      <Second_Section
      />
      <Third_Section
      />
      <Fourth_Section
      />

      <Fifth_Section />

      <Six_Section />

      <Seventh_Section />

      <Footer />
    </main>
  );
}
export default Home


