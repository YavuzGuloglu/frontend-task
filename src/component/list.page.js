import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchInput from './search.input'
import { data } from '../app/mockData.json'
import ListTable from './list.table'
import Pagination from './pagination'
import { useSelector } from 'react-redux'

export default function ListPage() {

    const { paramValue } = useParams()
    const [list, setList] = useState()
    const [click, setClick] = useState(true)
    const [searchValue, setSearchValue] = useState(paramValue)
    const [totalData, setTotalData] = useState()
    const [page, setPage] = useState(1);

    let secondValue = page * 6;
    let firstValue = secondValue - 6;

    const sort = useSelector(state => state.selection.sort)
    const url = useSelector(state => state.selection.url)

    useEffect(() => {
        orderSort()
    }, [sort])

    const orderSort = async () => {
        if (sort === 1 || sort === 2) {
            data.sort((x, y) => {
                let a = x[0].toUpperCase(), b = y[0].toUpperCase();
                switch (sort) {
                    case 1:
                        return a === b ? 0 : a > b ? 1 : -1;
                    case 2:
                        return a === b ? 0 : a < b ? 1 : -1;
                    default:
                        break;
                }
                return a === b ? 0 : a > b ? 1 : -1;
            });
        } else if (sort === 3 || sort === 4) {
            data.sort((x, y) => {
                var a = x[3].split('/').reverse().join(),
                    b = y[3].split('/').reverse().join();
                switch (sort) {
                    case 3:
                        return a < b ? -1 : (a > b ? 1 : 0);
                    case 4:
                        return a > b ? -1 : (a < b ? 1 : 0);
                    default:
                        break;
                }
                return a < b ? -1 : (a > b ? 1 : 0);
            });
        }
    }

    useEffect(() => {
        if (click) {
            if ((paramValue && paramValue?.length > 0) || (searchValue && searchValue?.length > 0)) {
                const search = paramValue !== searchValue ? searchValue : paramValue
                let allData = data.filter((x, index) => (x[0]?.toLowerCase().includes(search?.toLowerCase())))
                setTotalData(Object.keys(allData)?.length > 0 ? allData?.length : 0)
                setList(allData.slice(firstValue, secondValue))
            }
        } else {
            if ((paramValue && paramValue?.length > 0) || (url && url?.length > 0)) {
                const search = paramValue !== url ? url : paramValue
                let allData = data.filter((x, index) => (x[0]?.toLowerCase().includes(search?.toLowerCase())))
                setList(allData.slice(firstValue, secondValue))
            }
        }
    }, [paramValue, searchValue, click, page, sort])


    useEffect(() => {
        if (paramValue && paramValue?.length > 0) {
            setSearchValue(paramValue)
        }
    }, [paramValue])

    return (
        <div>
            <div className="list-page-area">
                <div className="list-page-logo">
                    <Link to="/">
                        <img src="https://www.tesodev.com/getimg/5d4c76e7de632812d86a5bf2/256"></img>
                    </Link>
                </div>
                <div className="list-page-search">
                    <SearchInput setSearchValue={setSearchValue} searchValue={searchValue} setClick={setClick} click={click} list={list} setPage={setPage} page={page} />
                </div>
            </div>
            <div className="list-page-table">
                {
                    list && list?.length <= 0 &&
                    <div className="text-color">
                        <span>Bulunamadı...</span>
                    </div>
                }
                <ListTable list={list} />
            </div>
            <div>
                <Pagination totalData={totalData} setPage={setPage} page={page} />
            </div>
        </div>
    )
}
