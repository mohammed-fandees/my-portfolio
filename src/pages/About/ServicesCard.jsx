import "./services-card.css";

export default function ServicesCard(props) {
  const { card } = props;
  return (
    <div className="col-lg-6 col-md-12">
      <div className="card rounded-3 p-2 text-center mb-3">
        <div className="card-image">
          <img className=" p-3 rounded-4 mt-3" src={card.image} alt="icon" />
        </div>
        <h3>{card.title}</h3>
        <p className="py-3">{card.text}</p>
      </div>
    </div>
  );
}
