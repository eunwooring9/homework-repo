export function Post({ author, content }) {
  return (
    <div className="text">
      <p className="author">저자: {author}</p>
      <p className="content">게시물: {content}</p>
    </div>
  );
}
