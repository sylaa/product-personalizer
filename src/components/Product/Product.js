import styles from './Product.module.scss';
// import clsx from 'clsx';
// import Button from '../Button/Button';
import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    return (
      props.basePrice +
      props.sizes.find((element) => element.name === currentSize)
        .additionalPrice
    );
  };

  return (
    <article className={styles.product}>
        <ProductImage
          title={props.title}
          name={props.name}
          currentColor={currentColor}
        />
      <div>
        <header>
          <h2 className={styles.name}> {props.title} </h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          title={props.tile}
          getPrice={getPrice}
          currentSize={currentSize}
          currentColor={currentColor}
          colors = {props.colors}
          sizes = {props.sizes}
          setCurrentColor = {setCurrentColor}
          setCurrentSize = {setCurrentSize}
        />
      </div>
    </article>
  );

  // const prepareColorClassName = (color) => {
  //   return styles[
  //     'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
  //   ];
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Summary');
  //   console.log('===========');
  //   console.log('Name: ' + props.title);
  //   console.log('Price: ' + getPrice());
  //   console.log('Size: ' + currentSize);
  //   console.log('Color: ' + currentColor);
  // };

  // return (
  //   <article className={styles.product}>
  //     {/* <div className={styles.imageContainer}>
  //       <img
  //         className={styles.image}
  //         alt={`${props.title}`}
  //         src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
  //       />
  //     </div> */}
  //     <div>
  //       <header>
  //         <h2 className={styles.name}> {props.title} </h2>
  //         <span className={styles.price}>Price: {getPrice()}$</span>
  //       </header>
  //       {/* <form onSubmit={handleSubmit}> */}
  //         {/* <div className={styles.sizes}>
  //           <h3 className={styles.optionLabel}>Sizes</h3>
  //           <ul className={styles.choices}>
  //             {props.sizes.map((size, index) => {
  //               return (
  //                 <li key={index}>
  //                   <button
  //                     type='button'
  //                     className={clsx(
  //                       size.name,
  //                       size.name === currentSize && styles.active
  //                     )}
  //                     onClick={() => {
  //                       console.log(size.name);
  //                       console.log(currentSize);
  //                       console.log(index);
  //                       setCurrentSize(props.sizes[index].name);
  //                     }}
  //                   >
  //                     {size.name}
  //                   </button>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         </div> */}
  //         {/* <div className={styles.colors}>
  //           <h3 className={styles.optionLabel}>Colors</h3>
  //           <ul className={styles.choices}>
  //             {props.colors.map((item, index) => (
  //               <li key={item}>
  //                 <button
  //                   type='button'
  //                   className={clsx(
  //                     prepareColorClassName(item),
  //                     item === currentColor && styles.active
  //                   )}
  //                   onClick={() => {
  //                     console.log(currentColor);
  //                     setCurrentColor(props.colors[index]);
  //                     console.log(item);
  //                   }}
  //                 />
  //               </li>
  //             ))}
  //           </ul>
  //         </div>  */}
  //         {/* <Button className={styles.button}>
  //           <span className='fa fa-shopping-cart' />
  //         </Button>
  //       </form> */}
  //     </div>
  //   </article>
  // );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      additionalPrice: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Product;
