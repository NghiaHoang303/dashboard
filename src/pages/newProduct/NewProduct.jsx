import React from 'react'
import './newProduct.css'
export default function NewProduct() {
    return (
        <div className="newProduct">
            <h2>New product</h2>
            <div className="newProductForm">
                <form className="newProductFormDetail">
                    <div className="formGroup">
                        <label className="title">Image</label>
                        <input type="file"></input>
                    </div>
                    <div className="formGroup">
                        <label className="title">Name</label>
                        <input type="text" placeholder="" className="inputGroup"></input>
                    </div>
                    <div className="formGroup">
                        <label className="title">Stock</label>
                        <input type="text" placeholder="" className="inputGroup"></input>
                    </div>
                    <div className="formGroup">
                        <label className="title" >Active</label>
                        <select className="inputGroup">
                            <option value= "yes">
                                yes
                            </option>
                            <option value= "no">
                                No
                            </option>
                        </select>
                    </div>

                    <button type="submit" className="btnCreate">Create</button>
                </form>
            </div>
        </div>
    )
}
