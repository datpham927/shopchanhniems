import React from 'react'
import AddProduct from './AddProduct'
import AddCategory from './AddCategory'
import ProductsManage from './ProductsManage'
import CategoryManage from './CategoryManage'
import ContactInfo from './ContactInfo'

const Body = ({tab}) => {
    return (
        <div className='w-full bg-white rounded-sm '>
            {tab === 1&& < AddCategory/>}
            {tab === 2 && < AddProduct />}
            {tab === 3 && < ProductsManage/>}
            {tab === 4&& <CategoryManage/>}
            {tab ===5&& <ContactInfo/>}

        </div>
    )
}

export default Body