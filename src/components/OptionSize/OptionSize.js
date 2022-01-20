import styles from '../Product/Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {

    return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => {
                return (
                  <li key={index}>
                    <button
                      type='button'
                      className={clsx(
                        size.name,
                        size.name === props.currentSize && styles.active
                      )}
                      onClick={() => {
                        console.log(size.name);
                        console.log(props.currentSize);
                        console.log(index);
                        props.setCurrentSize(props.sizes[index].name);
                      }}
                    >
                      {size.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
    )
}

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
      PropTypes.shape({
      additionalPrice: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
}

export default OptionSize;