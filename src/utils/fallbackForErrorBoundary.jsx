export default function fallbackForErrorBoundary({ error }) {
  return (
    <main>
      <h2>Something went wrong: {error.message}</h2>
    </main>
  );
}
