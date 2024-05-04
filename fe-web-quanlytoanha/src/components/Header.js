import Dropdown from 'react-bootstrap/Dropdown';
import  '../css/header.css'
import { Link, Outlet } from 'react-router-dom';
const Header = () => {

    return(
        <>
        < div className="navbar" style={{backgroundColor: '#0c5460',height: '10%', paddingTop: '2vh'}}>
        <div className="row col-md-12" style={{paddingLeft: '5%'}}>
            <div className="col-md-9 row">
                <Link   to="/" className="nav-item col-md-2 bt">Giới Thiệu</Link>


                <Dropdown className="col-md-3 ">
        <Dropdown.Toggle as="button"  className ="bt" variant="0c5460" id="dropdown-basic">
                 Quản Lý Tòa Nhà
        </Dropdown.Toggle>

      <Dropdown.Menu style={{marginTop: '2vh'}} as="ul">
        <Dropdown.Item  as ="li"><Link to={"/listCompany"} style={{textDecoration : 'none',color : 'black'}}>CÔNG TY</Link></Dropdown.Item>
        <Dropdown.Item  as ="li"><Link to={"/createEmployee"} style={{textDecoration : 'none',color : 'black'}}>MẶT BẰNG</Link></Dropdown.Item>
        <Dropdown.Item  as ="li"><Link to={"/createEmployee"} style={{textDecoration : 'none',color : 'black'}}>TIỀN THÁNG NÀY</Link></Dropdown.Item>
        <Dropdown.Item  as ="li"><Link to={"/createEmployee"} style={{textDecoration : 'none',color : 'black'}}>THỐNG KÊ DOANH THU</Link></Dropdown.Item>
        <Dropdown.Item  as ="li"><Link to={"/createEmployee"} style={{textDecoration : 'none',color : 'black'}}>THỐNG KÊ LƯƠNG THÁNG NHÂN VIÊN</Link></Dropdown.Item> 
      </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="col-md-3 ">
        <Dropdown.Toggle as="button"  className ="bt" variant="0c5460" id="dropdown-basic">
                 Quản Lý Dịch Vụ
        </Dropdown.Toggle>

      <Dropdown.Menu style={{marginTop: '2vh'}} as="ul">
        <Dropdown.Item  as ="li"><Link to={"/listCustomer"} style={{textDecoration : 'none',color : 'black'}}>ĐĂNG KÝ DỊCH VỤ</Link></Dropdown.Item>
        <Dropdown.Item  as ="li"><Link to={"/createCustomer"} style={{textDecoration : 'none',color : 'black'}}>QUẢN LÝ DỊCH VỤ</Link></Dropdown.Item>
      </Dropdown.Menu>
                </Dropdown>


                <Link   to="/" className="nav-item col-md-4 bt">Quản Lý Nhân Viên Tòa Nhà</Link>

                
               

                </div>

                </div>

               
        </div>
<Outlet/>
        </>

       
    )

}

export default Header;