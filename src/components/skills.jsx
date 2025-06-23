import "tailwindcss";

function Component({ language, years }) {
  return (
    <div>
      <h2>{language}</h2>
      <p>{years}</p>
    </div>
  );
}

export default Component;
