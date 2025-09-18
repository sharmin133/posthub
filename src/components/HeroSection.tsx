import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-screen h-[50vh] md:h-[90vh]">
      <Image
        src="https://i.ibb.co/3mgrcxwK/bible-5124602-1920.jpg"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
      />
    </section>
  );
}