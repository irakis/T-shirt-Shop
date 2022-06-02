import styles from './Product.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';


const ButtonForColors = (props) => {
    console.log('color props to tablica?: ', props.colorData);
    return (
        <li>
            {props.colorData.map(colorButton =>

                <button type="button" className={clsx(styles.colorRed)} key={shortid()}>{colorButton}</button>)
            }
        </li>
    )
};

export default ButtonForColors;