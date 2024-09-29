import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 style={styles.title}>React Interview Questions</h1>
      <div style={styles.links}>
        <p style={styles.linkItem}>
          <a href="/pages/search-filter">Search Filter</a>
        </p>
        <p style={styles.linkItem}>
          <a href="/pages/debounce">Debounce</a>
        </p>
        <p style={styles.linkItem}>
          <a href="/pages/countdown-timer">Countdown Timer</a>
        </p>
        <p style={styles.linkItem}>
          <a href="/pages/parse-link">Dynamic Link Parser</a>
        </p>
        <p style={styles.linkItem}>
          <a href="/pages/loadash-get">Implement loadash.get</a>
        </p>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    textAlign: "center",
    marginTop: "50px",
  },
  links: {
    paddingLeft: "20px",
  },
  linkItem: {
    marginBottom: "20px",
  },
};
