import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import clsx from 'clsx';

const Product = (props) => {
  const [currentProduct, setCurrentSize, setCurrentColor] = useState({
    currentColor: props.data.colors[0],
    currentSize: props.data.sizes[0].name,
    currentChoise: 'false',
  });

  const handleColor =(color)=>{ 
    //e.preventDefault();
    console.log('co dostaje handleColor? ', color);
    setCurrentColor(currentProduct.currentColor === color)
  };

  const handleSize =(size)=>{
    console.log('co dostaje handleSize? ',size);
    //e.preventDefault();
    setCurrentSize(currentProduct.currentSize === size)
  };

  console.log('this is currentPoduct: ', currentProduct);

  const getColorClassName = (colorName) => {
    switch (colorName) {
      case 'blue':
        return styles.colorBlue;
      case 'red':
        return styles.colorRed;
      case 'green':
        return styles.colorGreen;
      case 'white':
        return styles.colorWhite;
      case 'black':
        return styles.colorBlack;
      //no default
    }
  }

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
              {props.data.sizes.map(size => <Button
                className={currentProduct.currentSize === size.name && styles.active}
                action={handleSize} key={shortid()}>{size.name}</Button>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.data.colors.map(color => <Button className={clsx(getColorClassName(color), color === currentProduct.currentColor && styles.active)}
                action={handleColor} key={shortid()}>{color}</Button>)}
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