// this is used in the Header component
import { useEffect, useState } from "react";
import "./Announcement.css";
// import { useProducts } from "../Context";
import { useSelector } from "react-redux";
const Announcement = () => {
  const { announcements } = useSelector((store) => store.announcements);
  const [value, setValue] = useState(0);
  // const { announcements } = useProducts();

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(() => {
        let val = value + 1;
        if (val > announcements.length - 1) {
          val = 0;
        }
        return val;
      });
    }, 15000);
    // return () => clearInterval(interval)
  }, [value]);
  return (
    <section className="announcements">
      <Heading />
      <article className="announceCard df">
        {/* {announcements.map((announcement) => {
          console.log(announcements[0].image)
          const { id, image } = announcement;
          return <AnnouncementCard key={id} image={image} />;
        })} */}
        <AnnouncementCard image={announcements[value].image} />
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
