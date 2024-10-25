import { useContext } from 'react';
import { ProductsContext } from '../index';

const HomePage = () => {

    const { state, dispatch } = useContext(ProductsContext);

    return (
        <>
            <h1>Products</h1>
            <ul>
                {
                    state?.data?.map(({ id, category, description, name, price, imageUrl, gender }) => {
                        return (
                            <li key={id}>
                                <h2>{name}</h2>
                                <p>Price: {price}</p>
                                <img src={imageUrl} alt="Not found" />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default HomePage;