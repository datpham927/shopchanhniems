import { useEffect, useState } from 'react';
import { getCategory } from '../../api/category';
import { Skeleton } from '@mui/material';

const Sidebar = ({ categoryCode, setCategoryCode }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true)
      const res = await getCategory()
      if (!res?.success) return
      setCategories(res.data)
      setCategoryCode(res.data[0]?.category_code)
      setIsLoading(false)
    }
    fetchApi()
  }, [])

  return (
    <div className={`flex mobile:w-auto mobile:rounded-xl tablet:w-3/12  w-2/12 shrink-0 h-full  bg-white flex-col  gap-3 border-b-[1px] border-solid border-b-slate-200 shadow-cart rounded-md overflow-hidden }`}>
      {!isLoading ?
        <>
          <h3 className="mobile:hidden  font-semibold text-[rgb(240,103,59)] text-xl  px-4 py-3">Danh mục</h3>
          <ul className="flex flex-col text-sm cursor-pointer ">
            {categories?.map(
              (c) => <li key={c?._id}
                onClick={() => {
                  setCategoryCode(c?.category_code)
                }}
                className={`flex gap-2  px-4 py-2 items-center text-sm cursor-pointer hover:text-[rgb(240,103,59)] ${categoryCode === c?.category_code ? "text-[rgb(240,103,59)]  font-semibold bg-[rgb(249,208,232)]" : ""}`}
              >
                <div className='w-7 h-7 rounded-full overflow-hidden'>
                  <img className='w-full h-full object-cover' src={c?.category_thumbnail} alt='' />
                </div>
                <span className='mobile:hidden text-sm'> {c?.category_name}</span>
              </li>
            )}
          </ul> </>
        :
        <Skeleton variant="rectangular" width={'100%'} height={'100%'} sx={{ backgroundColor: "#EAD6E7" }} />}
    </div >
  )
};

export default Sidebar
