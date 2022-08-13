import React from 'react';

import classes from './ProductDetails.module.css'
import ProductData from './ProductData';

const ProductDetails=(props)=>{
return (

<div className={classes.ProductData}>
<h1 className={classes.ProductTitle}>{ProductData.title}</h1>
<p className={classes.Productdescription}>{ProductData.description}</p>
<h3 className={classes.SectionHeading}>Select Color</h3>
<div>
  <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black color watch" />
  <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red color watch" />
  <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue color watch" />
  <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple color watch" />
</div>
<h3 className={classes.SectionHeading}>Features</h3>
<div>
<button className={[classes.FeaturesItem,classes.SelectedFeaturesItem].join(' ')}>Time</button>
  <button className={classes.FeaturesItem}>Heart Rate</button>
</div>
<button className={classes.PrimaryButton}>Buy Now</button>
</div>

);

}

export default ProductDetails;