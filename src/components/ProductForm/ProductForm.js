import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';
import Button from '../Button/Button.js';
import styles from '../Product/Product.module.scss';
import PropTypes from 'prop-types';

const ProductForm = props => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('===========');
    console.log('Name: ' + props.title);
    console.log('Price: ' + props.getPrice());
    console.log('Size: ' + props.currentSize);
    console.log('Color: ' + props.currentColor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />

      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />

      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  getPrice: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      additionalPrice: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductForm;
