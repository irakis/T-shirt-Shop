import styles from '../Button/Button.module.scss'
import clsx from 'clsx';
import shortid from 'shortid';


const ButtonForSizes = (props) => {
    console.log('czy props to tablica?: ', props.sizeData);
    return (
        <li>
            {props.sizeData.map(sizeButton =>

                <button className={clsx(styles.button)} key={shortid()}>{sizeButton.name}</button>)
            }

        </li>
    )
};

export default ButtonForSizes;
