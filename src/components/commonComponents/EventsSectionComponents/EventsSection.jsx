import "./eventsSection.scss";

import ArrowToRight from "../../../assets/svg-icons/arrow-to-right.svg";

const eventsList = [
  {
    id: 1,
    date: 13,
    month: "APR",
    title: "A day with our wonderful children ",
  },
  {
    id: 2,
    date: 25,
    month: "APR",
    title: "Seminar: Caring for children with autism",
  },
];

const EventsSection = () => {
  return (
    <div className="events-container">
      <div className="events-content">
        <div className="events-title">Our Events</div>
        <div className="events-card-list">
          {eventsList.map((eventItem) => (
            <div className="events-card" key={eventItem.id}>
              <div className="event-datesection">
                <div className="event-date">{eventItem.date}</div>
                <div className="event-month">{eventItem.month}</div>
              </div>
              <div className="event-content">
                <div className="event-line">
                  NEXT EVENTS
                  <span className="horizontal-line"></span>
                </div>
                <div className="event-title-content">
                  <h3 className="event-title">{eventItem.title}</h3>
                  <img className="goto-button" src={ArrowToRight} alt="arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
