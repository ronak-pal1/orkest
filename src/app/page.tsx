import DotGrid from "@/components/DotGrid";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <Header />
     
      <div className="w-full h-screen absolute top-0 left-0 -z-50">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#262528e6"
          activeColor="#888c92"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1}
        />
      </div>


    </div>
  );
}
