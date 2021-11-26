import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setUrl } from '../features/slices/slice'

export default function SearchInput({ setSearchValue, searchValue, setClick, click, list, setPage, page }) {
    const dispatch = useDispatch()
    const ref = useRef()

    const handleClick = () => {
        setClick(true)
        if (page && page !== 1) {
            setPage(1)
        }
        dispatch(setUrl(ref.current.value))
    }

    const handleChange = (value) => {
        if (click) {
            setClick(false)
        }
        setSearchValue(value)
    }

    return (
        <div className="p-top">
            <input
                className={list && list?.length == 0 ? "search-input_invalid search-input" : "search-input"}
                placeholder="tesodev"
                value={searchValue}
                ref={ref}
                onChange={e => handleChange(e.target.value)} />
            <button className="search-button" onClick={handleClick}>Search</button>
        </div>
    )
}
