import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';

import FloatingCart from '../../components/FloatingCart';
import Footer from '../../components/Footer';
import server from '../../../server.json';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
    Container,
    ProductContainer,
    ProductImage,
    ProductList,
    Product,
    ProductTitle,
    PriceContent,
    ProductPrice,
    ProductButton,
    ProductButtonText,
} from './styles';

export default function Catalog() {
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const data = (await api.get('products')).data;

            setProducts(data);
        }
        loadProducts();
    }, []);

    function handleAddToCart(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    return (
        <Container>

            <ProductContainer>
                <ProductList
                    data={server.products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContent>
                                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                                <ProductButton onPress={() => handleAddToCart(item.id)}>
                                    <ProductButtonText>adicionar</ProductButtonText>
                                    <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
                                </ProductButton>
                            </PriceContent>
                        </Product>
                    )}
                />
            </ProductContainer>
            <FloatingCart />
            <Footer/>
        </Container>
    );
}
