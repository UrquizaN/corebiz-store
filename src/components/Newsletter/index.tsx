import { useCallback, useState } from 'react';
import { newsletterValidation } from '../../utils/utils';
import styles from './styles.module.scss';
import api from '../../services/api';

import INewsletter from '../../Interfaces/INewsletter'

import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';


const Newsletter = () => {
    const [isSubmitted, setSubmitted] = useState(false);

    const handleSubmit = useCallback(async ( { name, email }: INewsletter) => {

        await api.post("https://corebiz-test.herokuapp.com/api/v1/newsletter", {name, email}) 

        setSubmitted(true)

    }, []);

    return(
        <section className={styles.newsletterContainer}>

        { isSubmitted ? 
            (
                <div className={styles.newsletterSubmitted}>
                    <strong>Seu e-mail foi cadastrado com sucesso!</strong>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <button className={styles.button} onClick={ () =>  setSubmitted(false) }>Cadastrar novo e-mail</button>
                </div>
            )
            :(
                <Formik 
                    initialValues={{ 
                        name: '',
                        email: '',
                    }}
                    validationSchema = { newsletterValidation }
                    onSubmit={handleSubmit}
                    >
                    { formik => (
                        <>
                            <h2>Participe de nossas news com promoções e novidade!</h2>
                            <Form className={styles.newsletterForm}>
                                <div className={styles.fieldWrapper}>
                                    <Field type="text" name="name" placeholder="Digite seu nome" className={`${ formik.touched.name && formik.errors.name && styles.error }`} />
                                    <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                                </div>
                                <div className={styles.fieldWrapper}>
                                    <Field type="email" name="email" placeholder="Digite seu email" className={`${ formik.touched.email && formik.errors.email && styles.error }`} />
                                    <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                                </div>
                                <button type="submit" className={styles.button}>Eu quero!</button>
                            </Form>
                        </>
                    )}
                </Formik>
            )
        }
        </section>
    );
}

export default Newsletter;