import { useState,useEffect } from "react";

import * as companyService from '../../services/CompanysServices.js';
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const ListCompany = () => {

    const [companys,setCompanys] = useState([])
   const [totalPages,setTotalPages] = useState(0)



    const getAllCompany = async(page) => {
        const findAll = await companyService.findAllCompany(page);
        setTotalPages(findAll.totalPages);

        setCompanys(findAll.content);


    }
    const handlePageClick = (e) => {
        getAllCompany(+e.selected)

    }

    useEffect(()=>{
        getAllCompany(0);
    },[]);

    return (

        <>
            <div>
                <h3>Danh Sach Cong Ty</h3>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Tax Code</th>
                        <th>Authorized Capital</th>
                        <th>Phone Number</th>
                        <th>Employees</th>
                        <th>Area</th>
                        <th>View Employee</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                   {
                    companys.map(company => (
                        <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>{company.taxCode}</td>
                            <td>{company.authorizedCapital}</td>
                            <td>{company.phoneNumber}</td>
                            <td>1</td>
                            <td>
                                <Link className="btn btn-promary" to='/'>View</Link>
                            </td>
                            <td>
                                <Link className="btn btn-dark">Edit</Link>
                                <Link className="btn btn-dark">Delete</Link>
                            </td>

                        </tr>
                    ))
                   }
                </tbody>

            </table>
            <div style={{marginLeft : '30rem',marginTop : '3rem'}}>
        <ReactPaginate 
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null} 
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        
      />

    </div>
        </>
    )
}

export default ListCompany;
