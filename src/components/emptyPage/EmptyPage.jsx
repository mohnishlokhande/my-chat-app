import styles from "./EmptyPage.module.css";
function EmptyPage() {
  return (
    <div className={styles.emptyPage}>
      <h2>Chat me</h2>
      <div>Chat with anyone, everyone here!</div>
    </div>
  );
}

export default EmptyPage;
