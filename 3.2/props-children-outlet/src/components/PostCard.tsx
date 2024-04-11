export default function PostCard(props) {
  const { children } = props;

  return (
    <section>
      <h2>{ children.text }</h2>
      <img src={ children.image } alt={ `photo ${children.text}` } />
      <h4>{ `👍 ${children.likes}` }</h4>
      <h5>Tags:
        { children.tags.map((tag) => (
          <span key={ tag }>{ tag }</span>
        ))}
      </h5>
      <h3>{ children.publishDate }</h3>
    </section>
  );
}
