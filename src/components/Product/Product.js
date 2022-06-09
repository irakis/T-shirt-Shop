import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';


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
        <ProductOptions formData={props} formColor={currentColor} formSize={currentSize}
          actionAll={handleAll} actionColor={handleColor} actionDisplay={displayBasket} />
      </div>
    </article>
  )
}

Product.propTypes = { props: PropTypes.object };

export default Product;