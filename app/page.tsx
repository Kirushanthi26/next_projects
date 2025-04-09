import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Image
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
        width={300}
        height={200}
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/awesome">awesome</Link>
      </p>
    </main>
  );
}
