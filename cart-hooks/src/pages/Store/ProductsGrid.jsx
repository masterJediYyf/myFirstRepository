import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext';
import  ProductItem  from './ProductItem';

const ProductsGrid = () => {
    // value  连接 ProductsContext 上下文对象,拿到 dummy 数据
    const { products } = useContext(ProductsContext);
    console.log(products); 

    return (
        <div>
            <div className='row'>
                <div className='col-sm-8'>
                    <div className='py-3'>
                        {products.length} Products
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='form-group'>

                    </div>
                </div>
            </div>
            <div>
                {products.map(product => {
                   return <ProductItem key={product.id} product={product}/>
                })}
            </div>
        </div>
    )
}

export default ProductsGrid;