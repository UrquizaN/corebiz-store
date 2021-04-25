// Styles
import styles from './styles.module.scss';

// Interfaces
import Product from '../../Interfaces/IProduct';

// Components
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import Shelf from '../../components/Shelf';

import bannerHomeDesktop from '../../assets/banner-home-desktop.png';

// Settings
import api from '../../services/api';
import { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await api.get("/products");
                setProducts(data);
            } catch (error) {
                console.error('Error: ', error);
            }
        }

        getProducts();
    }, [])

    return(
        <>
            <Header />
            <section className={styles.container}>
                <img src={bannerHomeDesktop} alt="Banner - O que você está buscando?"/>
            </section>

            <main className={styles.container}>
                <div className={styles.content}>
                <h1>Mais vendidos</h1>

                {products.map( product => <Shelf key={product.productId} product={product} /> )}
                </div>
            </main>

            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;