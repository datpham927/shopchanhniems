import { logoLogout } from "../../assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setTab, tab }) => {
    const navigate=useNavigate()
  const SIDEBAR = [
    {
      name: "Thêm danh mục",
      code: 1
    }, {
      name: "Thêm sản phầm",
      code: 2
    }, {
      name: "Danh sách sản phẩm",
      code: 3
    },
    {
      name: "Danh sách danh mục",
      code: 4
    },
    {
      name: "Thông tin liên hệ",
      code: 5
    }
  ]
  return (
    <div className={`flex  rounded-md mobile:w-auto mobile:rounded-xl tablet:w-3/12  w-2/12 shrink-0 h-full  bg-white flex-col  gap-3 border-b-[1px] border-solid border-b-slate-200 shadow-cart py-6 px-2 }`}>
      <ul className="flex flex-col gap-3 text-sm cursor-pointer">

        {SIDEBAR?.map(e => <li
          onClick={() => {
            setTab(e?.code)
          }}
          className={`flex gap-2 items-center text-sm cursor-pointer hover:text-[rgb(240,103,59)] ${tab === e.code ? "text-[rgb(240,103,59)] " : ""}`}
        >
          <span className='mobile:hidden'> {e?.name}</span>
        </li>
        )}
        <li
          onClick={() => {
            if(window.confirm('Bạn có muốn đăng xuất không?')){
              localStorage.removeItem('userId');
              navigate('/login')
            }
          }}
          className={`flex gap-2 items-center text-sm cursor-pointer hover:text-[rgb(240,103,59)] `}
        >
          <img src={logoLogout} className='w-5'/>
          <span className='mobile:hidden'> Đăng xuất</span>
        </li>

      </ul>
    </div >
  )
};

export default Sidebar