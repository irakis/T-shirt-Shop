import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.data.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.data.sizes[0].name);
  const [currentPrice] = useState(props.data.basePrice);
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
      <ProductImage data={props.data} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.data.title}</h2>
          <span className={styles.price}>Price: {sumPrice(props.data.basePrice, subTotalPrice) + '$'}</span>
        </header>
        <form>
          <OptionSize sizeData={props} size={currentSize} action={handleAll} />
          <OptionColor optionsData={props} color={currentColor} action={handleColor} />
          <Button className={styles.button} action={displayBasket}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
}

Product.propTypes = { props: PropTypes.string };

export default Product;