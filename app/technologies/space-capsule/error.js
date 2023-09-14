'use client'; // Error components must be Client Components

// Adding an error.js file will display a visual error to the user. You can add an error.js file per directory. This wraps your component in an error boundary.

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Space capsule details error. Please click reload.</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reload</button>
    </div>
  );
}
