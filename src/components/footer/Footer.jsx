import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        View the{" "}
        <a
          href="https://github.com/mohnishlokhande/my-chat-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>
      </div>

      <div className={styles.aboutMe}>
        <div>Made by Mohnish Lokhande</div>
        <div>
          <a
            href="https://www.linkedin.com/in/mohnish-lokhande/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/mohnishlokhande"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
