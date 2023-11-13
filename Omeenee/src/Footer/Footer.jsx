const Footer = () => {
  return (
    <footer className="footer ">
      <div className="df footerHeadline">
        <h2 className="logo">
          <span>Omee</span>
          <span>Nee</span>
        </h2>
        <div>
          <h4>New To OmeeNee</h4>
          <p>Know of new products first</p>
          <form action="">
            <input type="text" placeholder="Please enter your email" />
          </form>
        </div>
      </div>
      <h3 className="logo copyright">
        A copyright of
        <span> Omee</span>
        <span>Nee</span>
      </h3>
    </footer>
  );
};

export default Footer;
