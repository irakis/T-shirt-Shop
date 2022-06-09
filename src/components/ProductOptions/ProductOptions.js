import styles from '../ProductOptions/ProductOptions.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductOptions = ({formData, formSize, formColor, actionAll, actionColor, actionDisplay}) => {

    return (
        <form>
            <OptionSize sizeData={formData} size={formSize} action={actionAll} />
            <OptionColor optionsData={formData} color={formColor} action={actionColor} />
            <Button className={styles.button} action={actionDisplay}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
}

ProductOptions.propTypes = {
    formData : PropTypes.object,
    formSize : PropTypes.string,
    formColor : PropTypes.string,
    actionAll : PropTypes.func,
    actionColor : PropTypes.func,
    actionDisplay : PropTypes.func
}

export default ProductOptions;