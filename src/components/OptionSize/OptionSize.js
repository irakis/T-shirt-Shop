import styles from '../OptionSize/OptionSize.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import shortid from 'shortid';

const OptionSize = ({ sizeData, size, action }) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizeData.data.sizes.map(oneSize => <Button
                    className={oneSize.name === size && styles.active}
                    action={() => action(oneSize.name, oneSize.additionalPrice, sizeData.data.title)}
                    key={shortid()}>{oneSize.name}</Button>)}
            </ul>
        </div>
    )
}

OptionSize.propTypes = {
    sizeData: PropTypes.object,
    size: PropTypes.string,
    action: PropTypes.func
}

export default OptionSize;