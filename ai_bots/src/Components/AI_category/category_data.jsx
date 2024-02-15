import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerRow = ({ name, description, id, user_id }) => {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch(`https://ttestt.shop/api/assistants/get?assistant_id=${id}&user_id=${user_id}`, {
    //         method: "GET",
    //         mode: "cors",
    //         cache: "no-cache",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)

    //         })
    //         .catch(error => { console.error("Error fetching data:", error); })
    // };


    return (
        <tr className='TableRow' >
            <td className="py-3 table_text align-middle">{id}</td>
            <td className="py-3 table_text align-middle">{name}</td>
            <td className="py-3 table_text align-middle">{description}</td>
            <td className="py-3 table_text align-middle"><div className='status_active'>Edit</div></td>
        </tr>
    );
};
export default CustomerRow;

