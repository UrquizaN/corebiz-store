import Product from '../../Interfaces/IProduct';

import React from 'react';

import styles from './styles.module.scss';
import { formatValue } from '../../utils/utils';

interface ShelfProps {
    product: Product;
}

const Shelf: React.FC<ShelfProps> = ({product}) => {
    return(
        <div className={styles.shelfContainer}>
            <div className={styles.productImageContainer}>
                {product.listPrice && <span className={styles.discountFlag} />}
                <img src={product.imageUrl} alt="Sapato Floater Preto"/>
            </div>
            <div className={styles.productInfo}>
            <p className={styles.productTitle}>{product.productName}</p>
            <span className={styles.productRating}>{product.stars} stars</span>

            {product.listPrice && 
                <small className={styles.productLastPrice}>de {formatValue(product.listPrice / 100)}</small>
            }
            
            <strong className={styles.productPrice}>por {formatValue(product.price / 100)}</strong>

            {product.installments.length > 0 && 
                <small className={styles.productInstallments}>ou em {product.installments[0].quantity}x de {formatValue(product.installments[0].value / 100)}</small>
            }

            <button className={styles.buyButton}>Comprar</button>
            </div>
        </div>
    );
}

export default Shelf;