import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './ProductCard.css';

function ProductCard({ imageSrc, description, price, link }) {
  return (
    <Card className="product-card">
      <div className="floating-image">
        <CardMedia component="img" src={imageSrc} alt="Product Image" />
      </div>
      <CardContent>
        <Typography variant="body2" component="p" className="product-description">
          {description}
        </Typography>
        <Typography variant="body2" component="p" className="product-price">
          Price: {price}
        </Typography>
        <a href={link} className="product-link">View Details</a>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
