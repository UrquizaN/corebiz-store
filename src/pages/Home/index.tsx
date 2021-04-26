// Styles
import styles from './styles.module.scss';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
// Interfaces
import Product from '../../Interfaces/IProduct';

// Components
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import ShelfItem from '../../components/Shelf';

import bannerHomeDesktop from '../../assets/banner-home-desktop.png';
import bannerHomeMobile from '../../assets/banner-home-mobile.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';

// Settings
import api from '../../services/api';
import { useEffect, useMemo, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const banners = useMemo(()=>{
        let banners = [];

        for(let i = 0; i < 3; i++){
            banners.push(
                (
                    <SplideSlide key={i}>
                        <section className={styles.container}>
                        <img src={window.screen.width < 720 ? bannerHomeMobile : bannerHomeDesktop } alt="Banner - O que você está buscando?" />
                        </section>
                    </SplideSlide>
                )
            )
        }

        return banners;
    }, [])

    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await api.get("/products");
                setProducts(data);
            } catch (error) {
                alert('Não foi possível encontrar os produtos');
            }
        }

        getProducts();
    }, [])

    return (
        <>
            <Header />
            <Splide options={{
                rewind: true,
                classes: {
                    prev: `splide__arrow--prev ${styles.carouselfPrev}`,
                    next: `splide__arrow--next ${styles.carouselfNext}`,
                    page: `splide__pagination__page styles_activePage__1O_bo ${styles.activePage}`,
                }
            }}>
                { banners }
           </Splide>

            <main className={styles.container}>
                <div className={styles.content}>
                    <h1>Mais vendidos</h1>

                    <Splide options={{
                        rewind: true,
                        gap: '1rem',
                        perPage: 4,
                        breakpoints: {
                            720: {
                                width: '100%',
                                perPage: 2,
                                gap: '1rem',
                            },
                        },
                        classes: {
                            prev: `splide__arrow--prev ${styles.shelfPrev}`,
                            next: `splide__arrow--next ${styles.shelfNext}`,
		                    page      : `splide__pagination__page styles_activePage__1O_bo ${styles.activePage}`, // each button
                            pagination: `splide__pagination ${styles.shelfPagination}`, 
                        }
                    }}>

                        {products.map(product => (
                            <SplideSlide key={product.productId} >
                                <ShelfItem  product={product} />
                            </SplideSlide>
                        ))}

                    </Splide>

                </div>
            </main>

            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;