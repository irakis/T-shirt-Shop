import styles from './Product.module.scss';
import Button from '../Button/Button';
//import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import clsx from 'clsx';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.data.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.data.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.data.basePrice);
  const [subTotalPrice, setPrice] = useState([0]);
  const [name, setName] = useState([0]);


  const handleColor = (color) => {
    setCurrentColor(color)
  };

  const handleSize = (size) => {
    setCurrentSize(size);
  };

  const handelPrice = (price) => {
    setPrice(price)
  };

  const handleAll = (action, addPrice, title) => {
    handleSize(action);
    handelPrice(addPrice);
    setName(title);
  };

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
  };

  const sumPrice = (base, additional) => {
    const finalSum = parseInt(base) + parseInt(additional);
    return (
      finalSum
    );
  };

  const displayBasket = () => {

    return (
      console.log('Name: ', name),
      console.log('Price: ', sumPrice(currentPrice, subTotalPrice)),
      console.log('Size: ', currentSize),
      console.log('Color: ', currentColor)
    )
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.data.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.data.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.data.title}</h2>
          <span className={styles.price}>Price: {sumPrice(props.data.basePrice, subTotalPrice) + '$'}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.data.sizes.map(size => <Button
                className={currentSize === size.name && styles.active}
                action={() => handleAll(size.name, size.additionalPrice, props.data.title)} key={shortid()}>{size.name}</Button>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.data.colors.map(color => <Button className={clsx(getColorClassName(color), color === currentColor && styles.active)}
                action={() => handleColor(color)} key={shortid()}>{color}</Button>)}
            </ul>
          </div>
          <Button className={styles.button} action={displayBasket}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
}

//Product.propTypes = { props: PropTypes.any };
export default Product;