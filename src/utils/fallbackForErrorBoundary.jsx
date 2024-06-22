export default function fallbackForErrorBoundary({ error }) {
    return (
      <main>
        <h3>Something went wrong: {error.message}</h3>
      </main>
    );
  }