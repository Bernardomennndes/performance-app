import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
    results: Array<{
        id: number;
        title: string;
        price: number;
        formattedPrice: string;
    }>;
    totalPrice: number;
}

export function SearchResults({ results, totalPrice }: SearchResultProps) {

    return (
        <div>
            <p>{totalPrice}</p>
            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} />
                );
            })}
        </div>
    );
}