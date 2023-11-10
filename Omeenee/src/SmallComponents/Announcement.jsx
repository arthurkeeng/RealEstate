import "./Announcement.css";
import img1 from "../images/artic.jpg";
import { useProducts } from "../Context";
// import { announcements } from "../data";
const Announcement = () => {
  const { announcements } = useProducts();
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
