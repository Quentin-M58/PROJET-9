import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    // new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
    // modification de < par > car date plus anciennes en premier
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    // Ajout d'une verification
    if (byDateDesc !== undefined) {
      setTimeout(
        // () => setIndex(index < byDateDesc.length-1 ? index + 1 : 0),
        // ajout -1 car index de depart est 0 et pas 1
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
        5000
      );
    }
  };
  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
          <div
            key={event.title}
            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
              }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
        </div>
        // deplacement de "SlideCard__paginationContainer" 
        // en dehors pour eviter repetition
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((_, radioIdx) => (
            <input
              key={`${_.title}`}
              id={`${radioIdx}`}
              type="radio"
              name="radio-button"
              // checked={idx === radioIdx}
              // modification de idx par index car vrai nom
              checked={index === radioIdx}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
