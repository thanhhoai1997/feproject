
import axios from "axios";
export const findAllCompany =  async(page) => {
    try{
        const res = await axios.get(`http://localhost:8080/companys?page=${page}`);
        return res.data;
    }catch(e){
        console.log(e);
    }

}