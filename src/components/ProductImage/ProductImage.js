import styles from '../ProductImage/ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {
    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={props.data.title}
                src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.data.name}--${props.color}.jpg`} />
        </div>
    )
}
ProductImage.propTypes = { 
    props : PropTypes.object,
    color : PropTypes.string,
};

export default ProductImage;