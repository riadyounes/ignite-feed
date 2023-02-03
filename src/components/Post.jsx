export function Post({ author, content }) {
  return (
    <div>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  );
}
