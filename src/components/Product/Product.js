import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
// import productsData from '../../data/products';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    return (
      props.basePrice +
      props.sizes.find((element) => element === currentSize).additionalPrice
    );
  };

  

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={`${props.title}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}> {props.title} </h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => {
                return (
                  <li key={index}>
                    <button
                      type='button'
                      className={clsx(
                        size,
                        size === currentSize && styles.active
                      )}
                      onClick={() => {
                        setCurrentSize(props.sizes[index]);
                      }}
                    >
                      {size.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item, index) => (
                <li key={item}>
                  <button
                    type='button'
                    className={clsx(
                      prepareColorClassName(item),
                      item === currentColor && styles.active
                    )}
                    onClick={() => {
                      setCurrentColor(props.colors[index]);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button
            className={styles.button}
          >
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  basePrice: PropTypes.number.isRequired,
  // sizes.name: PropTypes.string.isRequired,
  // siezesadditionalPrice: PropTypes.number.isRequired
};

export default Product;
