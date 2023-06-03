import styles from "./Card.module.css";

const Card = ({agente}) => {
  return (
    <div className={styles.card}>
      <div class="d-flex justify-center f-column">
        <div className={styles.cardImg}>
          <img src={agente.data.imagen} />
        </div>
        <div className={styles.desc}>
          <h6 className={styles.primaryText}>Agente Secreto</h6>
          <h6 className={styles.secondaryText}> {agente.data.nombre} Alias {agente.data.alias}</h6>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.rating}>
          <h6 className={styles.primaryText}> Edad </h6>
          <h6 className={styles.secondaryText}> {agente.data.edad}</h6>
        </div>
        <div className={styles.activity}>
          <h6 className={styles.primaryText}> Nacionalidad </h6>
          <h6 className={styles.secondaryText}> {agente.data.nacionalidad} </h6>
        </div>
      </div>
      <div className={styles.boxDescription}>
        <h6 className={styles.primaryText}> Habilidades excepcionales</h6>
        <h6 className={styles.secondaryText}>
          {agente.data.habilidades}
        </h6>
      </div>
      <div className={styles.boxDescription}>
        <h6 className={styles.primaryText}> Personalidad</h6>
        <h6 className={styles.secondaryText}>
          {agente.data.personalidad}
        </h6>
      </div>
    </div>
  );
};

export default Card;