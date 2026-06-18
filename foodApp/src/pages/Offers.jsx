import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import offers from "../data/offers";

function Offers() {
  return (
    <>
      <Navbar />

      <div className="offers">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="offer-card"
          >
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Offers;