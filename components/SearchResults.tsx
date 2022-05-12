import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
}

export function SearchResults({ results }: SearchResultProps) {

    const totalPrice = useMemo(() => {
        return results.reduce((acc, element) => {
            return acc + element.price;
        }, 0)
    }, [results]);

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