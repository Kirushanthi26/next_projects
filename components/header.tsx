import Image from "next/image";

export default function Header() {
  return (
    <>
      <Image
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
        width={300}
        height={200}
      />
      <h1>Welcome to this NextJS Course!</h1>
    </>
  );
}
