import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function SearchList({ list }) {
    const url = useSelector(state => state.selection.url)

    return (
        <div className="search-main">
            <div className="search-list">
                {
                    list?.map((x, index) => (
                        <div key={index} className="list-position">
                            <div>
                                <div className=" item-1">{x[4] + ' - ' + x[5]}</div>
                                <div className="item-3">{x[0] + ' - ' + x[3]}</div>
                            </div>
                            <div className=" item-2">{x[2]}</div>
                        </div>
                    ))
                }
                <div className="show-more">
                    <Link className="show-more-text" to={`/listPage/${url}`} >
                        <span className="cursor">
                            Show more...
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
