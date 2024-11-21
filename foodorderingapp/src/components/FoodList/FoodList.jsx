import styles from "./FoodList.module.css";

function FoodList() {
  return (
    <>
      <div className={styles.foodListContainer}>
        <h1 className={styles.title}>Food List</h1>
      </div>
    </>
  );
}

export default FoodList;
