import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} đánh giá`}
          />
        </Card.Text>

        <Card.Text as='h3'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') } VNĐ</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
