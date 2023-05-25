import React, { useEffect } from 'react';
import Products from '../../Products/Products';
import useFetch from '../../../hooks/useFetch';

const RelatedProducts = ({ categoryId, productId }) => {
  const { data, isLoading, error } = useFetch(
    `/api/products?populate=*filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=&pagination[limit]=4`
  );

  useEffect(() => {
    // You can add additional logic here if needed
  }, [categoryId, productId]);

  if (isLoading) {
    return <p>Loading related products...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching related products.</p>;
  }

  return (
    <div className="related-product">
      {data && data.data && (
        <Products headingText="Related Products" products={data.data} />
      )}
    </div>
  );
};

export default RelatedProducts;
