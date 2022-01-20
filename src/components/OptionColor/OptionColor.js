import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import Product from '../Product/Product.js';

const OptionColor = (props) => {

    const prepareColorClassName = (color) => {
        return styles[
          'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
        ];
      };

    return (
        <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((item, index) => (
            <li key={item}>
              <button
                type='button'
                className={clsx(
                  prepareColorClassName(item),
                  item === props.currentColor && styles.active
                )}
                onClick={() => {
                  console.log(props.currentColor);
                  props.setCurrentColor(props.colors[index]);
                  console.log(item);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    )
}

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
}
export default OptionColor;