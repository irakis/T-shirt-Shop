import styles from '../OptionColor/OptionColor.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';
import shortid from 'shortid';

const OptionColor = ({ optionsData, color, action }) => {

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
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {optionsData.data.colors.map(oneColor =>
          <Button className={clsx(getColorClassName(oneColor), oneColor === color && styles.active)}
            action={() => action(oneColor)} key={shortid()}>{oneColor}</Button>)}
      </ul>
    </div>
  )
};

OptionColor.propTypes = {
  optionsData: PropTypes.object,
  color: PropTypes.string,
  action: PropTypes.func
};

export default OptionColor;