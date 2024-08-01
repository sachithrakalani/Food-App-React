import styles from "./fooditem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <h1>{food.title}</h1>
    </div>
  );
}
