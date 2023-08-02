import "./title.css";

export default function Title(props) {
  const { content } = props;
  return (
    <div
      className="page-title text-center text-capitalize text-white raleway"
      style={{ padding: "82px 12px 30px" }}
      key={content.id}
    >
      <h2>
        {content.title} <span>{content.customize}</span>
      </h2>
      {content.subtitle ? (
        <span>
          {content.subtitle} <span>{content.subcustomize}</span>
        </span>
      ) : null}
    </div>
  );
}
