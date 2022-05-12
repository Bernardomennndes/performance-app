import { memo } from 'react';

interface ProductItemProps {
    product: {
        id: number;
        title: string;
        price: number;
        formattedPrice: string;
    };
}

function ProductItemComponent({ product }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.formattedPrice}</strong>
        </div>
    );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
}); 