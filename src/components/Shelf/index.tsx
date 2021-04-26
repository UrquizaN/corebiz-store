import Product from '../../Interfaces/IProduct';

import React, { useMemo } from 'react';

import styles from './styles.module.scss';
import { formatValue } from '../../utils/utils';
import { useCart } from '../../contexts/CartContext';
import IProduct from '../../Interfaces/IProduct';
import starFill from '../../assets/star-fill.svg';
import starBlank from '../../assets/star-blank.svg';
interface ShelfProps {
    product: Product;
}

const ShelfItem: React.FC<ShelfProps> = ({product}) => {
    const { addCart } = useCart()

    function handleBuyButton(product: IProduct){
        addCart(product)
    }

    const stars = useMemo(()=>{
        let stars = [];

        for(let i = 0; i < 5; i++){
            stars.push(<img src={product.stars > i ? starFill : starBlank} key={Math.random() * 1000} alt="Avaliação"/>)
        }

        return stars
    }, [product])

    return(
        <div className={styles.shelfContainer}>
            <div className={styles.productImageContainer}>
                {product.listPrice && <span className={styles.discountFlag} />}
                <img src={product.imageUrl} alt="Sapato Floater Preto"/>
            </div>
            <div className={styles.productInfo}>
            <p className={styles.productTitle}>{product.productName}</p>
            <div className={styles.productRating}>
                {stars}
            </div>

            {product.listPrice && 
                <small className={styles.productListPrice}>de {formatValue(product.listPrice / 100)}</small>
            }
            
            <strong className={styles.productPrice}>por {formatValue(product.price / 100)}</strong>

            {product.installments.length > 0 && 
                <small className={styles.productInstallments}>ou em {product.installments[0].quantity}x de {formatValue(product.installments[0].value / 100)}</small>
            }

            </div>
            <button className={styles.buyButton} onClick={() => handleBuyButton(product)}>Comprar</button>
        </div>
    );
}

export default ShelfItem;