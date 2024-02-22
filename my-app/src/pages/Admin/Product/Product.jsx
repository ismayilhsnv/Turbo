import React, { useState, useEffect } from 'react';
import Table from '../../../components/Admin/Table/Table';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'
const Product = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])


    useEffect(() => {
        axios.get('http://localhost:9090/turbo/').then(res => {
            setData(res.data);
        });
    }, []);




    return (


        <div className='div'>
            <table className="table table-hover table-white">
                <thead>
                    <tr>
                        <th scope="col">Marka</th>
                        <th scope='col'>Model</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return <Table key={index} item={item} data={data} setData={setData} setFilteredData={setFilteredData} />

                    })}
                </tbody>
            </table>
            <Toaster />
        </div>
    );
};

export default Product;
