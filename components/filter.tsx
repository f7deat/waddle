import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../styles/filter.module.css';
import { Category } from '../types/category';

export const Filter = () => {

    const categories: Category[] = [
        {
            id: 1,
            name: 'Decor'
        },
        {
            id: 2,
            name: 'Đồ gia dụng'
        },
        {
            id: 3,
            name: 'Thời trang'
        }
    ]

    return (
        <div className={styles.filter}>
            <div className="px-6 py-4 border-b flex cursor-pointer items-center hover:text-red-500">
                <div className='flex-grow font-bold'>
                    Bộ lọc
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div className={styles.categories}>
                <div className="px-6 py-4 border-b flex cursor-pointer items-center hover:text-red-500">
                    <div className='flex-grow font-bold'>
                        Danh mục
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="px-6 bg-gray-100">
                    {
                        categories.map(category => (
                            <div key={category.id} className="px-4 py-2 border-b border-white">
                                {category.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}