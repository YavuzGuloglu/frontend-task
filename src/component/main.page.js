import React, { useEffect, useState } from 'react'
import SearchInput from './search.input'
import SearchList from './search.list'
import { data } from '../app/mockData.json'

export default function MainPage() {
    const [searchValue, setSearchValue] = useState()
    const [click, setClick] = useState(false)
    const [list, setList] = useState()

    useEffect(() => {
        if (click) {
            setList()
            if (searchValue && searchValue?.length > 0) {
                setList(data.filter((x, index) => (x[0]?.toLowerCase().includes(searchValue?.toLowerCase()))).slice(0, 3))
            }
        }
    }, [searchValue, click])

    return (
        <div>
            <div className="main-div">
                <div>
                    <img src="https://www.tesodev.com/getimg/5d4c76e7de632812d86a5bf2/256"></img>
                </div>
                <div>
                    <SearchInput setSearchValue={setSearchValue} list={list} searchValue={searchValue} setClick={setClick} click={click} />
                </div>
                {list && list?.length > 0 ?
                    <SearchList list={list} />
                    :
                    list?.length <= 0 && <div className="text-color">
                        <span>Bulunamadı...</span>
                    </div>
                }
            </div>
        </div>
    )
}
