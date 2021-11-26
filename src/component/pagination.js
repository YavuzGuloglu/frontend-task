import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Pagination({ totalData, setPage, page }) {

    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        if (totalData) {
            setPageNumbers(Array.from(Array(Math.ceil(totalData / 6))?.keys()))
        }
    }, [totalData])

    const paginate = (pageNumber) => {
        setPage(pageNumber);
    }

    return (
        <>
            {
                totalData > 0 &&
                <div className="pagination-position">
                    <div className="previous_and_next" onClick={() => page > 1 && paginate(page - 1)} >Geri</div>
                    {
                        pageNumbers?.map(number => (
                            <div key={number} className={page === number + 1 ? 'pagination-item-active' : 'pagination-item'} onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </div>
                        ))
                    }
                    <div className="previous_and_next" onClick={() => page < pageNumbers?.length && paginate(page + 1)} >İleri</div>
                </div >
            }
        </>
    )
}
