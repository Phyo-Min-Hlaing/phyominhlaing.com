"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" data-theme="aurora">
      <body>
        <div style={{ padding: 48, fontFamily: "system-ui, sans-serif" }}>
          <h1>Something went wrong.</h1>
          <p>Try again, or come back in a moment.</p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
