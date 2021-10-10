import React, { useState } from 'react'

import './product.css'
import {productData} from '../../DummyData.js';
import Chart from '../../components/chart/Chart';
import { Upload } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Product({}) {
    const [data, setData] = useState(productData)

    return (
        <div className="product">
            <div className="productNameAndCreate">
                <div><h2 className="productTitle">Product</h2></div>
                <div><Link to='/new-product' className="productBtnCreate">Create</Link></div>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data = {data} dataKey1='Sales product' 
                        dataKey2='Active Sales' title = 'Sales performance'
                    />
                </div>
                <div className="productTopRight">
                    <div className="productTopName">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_33Cdf4aRLDW_PsPMcXO_t21Jxw1DtAdPQ&usqp=CAU" alt="" 
                            className="productTopAvatar"
                        />
                        Galaxy Z Flip3 5G
                    </div>
                    <div className="productTopRightInfo">
                        <div className="productTopRightInfoRow">
                            <span className="productNameValue">Id:</span>
                            <span className="productNumberSystem">123</span>
                        </div>

                        <div className="productTopRightInfoRow">
                            <span className="productNameValue">Sales:</span>
                            <span className="productNumberSystem">4234</span>
                        </div>

                        <div className="productTopRightInfoRow">
                            <span className="productNameValue">Active:</span>
                            <span className="productNumberSystem">yes</span>
                        </div>

                        <div className="productTopRightInfoRow">
                            <span className="productNameValue">In stock:</span>
                            <span className="productNumberSystem">no</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <div className="productBottomLeft">
                    <div className="productNameProduct">
                        <span className="productNameTitle">Product name</span>
                        <div >
                            <input className="productNameDetail" placeholder="Galaxy Z Flip3 5G"></input>
                        </div>
                    </div>
                    <div className="productInStock">
                        <label>In stock</label>
                        <div>
                            <select className ='productSelect'>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="productActive">
                        <label>Active</label>
                        <div>
                            <select className ='productSelect' >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="productBottomRight">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_33Cdf4aRLDW_PsPMcXO_t21Jxw1DtAdPQ&usqp=CAU" alt="" 
                        className="productImage"
                    />
                    
                    <label htmlFor="uploadImageProduct">
                    <Upload className="productBottomRightIcon"/>
                    </label>
                    <input type="file" id ='uploadImageProduct' style={{display: 'none'}} />
                    <div>
                        <button  className="productBtnUpdate">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
