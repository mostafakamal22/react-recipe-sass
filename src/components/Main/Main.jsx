/* eslint-disable react/prop-types */

export default function Main({ children }) {
  return (
    <main className="main-container">
      <div className="container">{children}</div>
    </main>
  );
}
