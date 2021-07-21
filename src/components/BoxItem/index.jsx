import styles from './BoxItem.module.scss'

function BoxItem({
  source,
  productName,
  of,
  by,
  parcelTimes,
  parceAmount,
  showButton,
  onClick,
  addItem,
  listPrice,
  stars,
}) {
  return (
    
    <div className={styles.boxContent} onClick={onClick}>
      <div className={styles.contentImage}>
        <img className={styles.imageProduct} src={source} alt="" />
        {listPrice}
      </div>
      <div className={styles.boxDescription}>
        <p>{productName}</p>
        <div>
          {stars}        
        </div>

        {!of ? (
          <p style={{ visibility: 'hidden' }}>''</p>
          ) : (
            <p>{`de R$ ${of}`}</p>
        )}

        <span>{`por R$ ${by}`}</span>

        {parcelTimes.length ? (
          <p>{`ou em ${parcelTimes}x de R$ ${parceAmount}`}</p>
        ) : (
          <p style={{ visibility: 'hidden' }}>''</p>
        )}

        {showButton ? (
          <button onClick={addItem}>Comprar</button>
        ) : (
          <button style={{ visibility: 'hidden' }}>Comprar</button>
        )}
      </div>
    </div>
  )
}

export default BoxItem
