import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactComponent as SortIco } from '../assets/images/arrows-sort_1.svg'
import { setSort } from '../features/slices/slice'

export default function ListTable({ list }) {

    const [showSort, setShowSort] = useState(false)

    const dispatch = useDispatch()

    const sortType = (type) => {
        setShowSort(false)
        dispatch(setSort(type))
    }

    return (
        <div>
            <div className="sort-div" onClick={() => setShowSort(!showSort)}>
                <SortIco className="sort-ico" />
                Order By
            </div>
            {
                list?.map((x, index) => (
                    <div key={index} className="list-table">
                        <div className="list-table-position">
                            <div>
                                <div className="item-1">{x[4] + ' - ' + x[5]}</div>
                                <div className="item-3">{x[0] + ' - ' + x[3]}</div>
                            </div>
                            <div className="item-2">{x[2]}</div>
                        </div>
                        <hr></hr>
                    </div>
                ))
            }
            {
                showSort &&
                <div className="sort-list">
                    <div className="sort-item" onClick={() => sortType(1)}> Name ascending</div>
                    <div className="sort-item" onClick={() => sortType(2)}> Name descending</div>
                    <div className="sort-item" onClick={() => sortType(3)}> Year ascending</div>
                    <div className="sort-item" onClick={() => sortType(4)}> Year descending </div>
                </div>
            }

        </div>
    )
}
