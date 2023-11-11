import "./Announcement.css";
// import { useProducts } from "../Context";
import { useSelector } from "react-redux";
const Announcement = () => {
  const { announcements } = useSelector((store) => store.announcements);
  // const { announcements } = useProducts();
  return (
    <section className="announcements">
      <Heading />
      <article className="announceCard df">
        {announcements.map((announcement) => {
          const { id, image } = announcement;
          return <AnnouncementCard key={id} image={image} />;
        })}
      </article>
    </section>
  );
};

export default Announcement;

const Heading = () => {
  return (
    <div className="callDiv">
      <span>Send Order to:</span>
      <span> 0810029384903</span>
    </div>
  );
};

const AnnouncementCard = ({ image }) => {
  return (
    <div className="cardAnnouncement">
      <img src={image} />
    </div>
  );
};
