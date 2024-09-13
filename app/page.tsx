import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>React interview questions</h1>
      <p>
        <Link href="/search-filter">Search Filter</Link>
      </p>
      <p>
        <Link href="/debounce">Debounce</Link>
      </p>
      <p>
        <Link href="/countdown-timer">Countdown Timer</Link>
      </p>
    </div>
  );
}
