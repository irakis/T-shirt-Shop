import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ButtonForSizes from '../ButtonForSizes/ButtonForSizes';
import ButtonForColors from '../ButtonForColors/ButtonForColors';

const Product = (props) => {
  const [currentProduct, /*setCurrentProduct*/] = useState({
    currentColor: props.data.colors[0],
    currentSize: props.data.sizes[0].name,
    currentChoise: 'false',
  })

  console.log(currentProduct);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.data.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.data.name}--${currentProduct.currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.data.title}</h2>
          <span className={styles.price}>Price{props.data.basePrice + '$'}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <ButtonForSizes sizeData={props.data.sizes} />
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <ButtonForColors colorData={props.data.colors}/>

                {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li>
              */}


            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = { props: PropTypes.any };

export default Product;