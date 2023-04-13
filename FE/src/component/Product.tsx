import React, { useEffect } from 'react'
import { deleteProduct,getAllProduct } from '../slice/productApi'
import { useAppDispatch, useAppSelector } from '../store/index'
import { RootState } from '../store/store'
import { Link} from 'react-router-dom'
import { productAPI, useDeleteProductMutation, useGetAllProductQuery } from '../services/product'
import { IProduct } from '../interfaces/Product'


type Props = {}

const Product = (props: Props) => {
    //dòng dưới dùng cho rtk-query
    const {data:product, isLoading,error} = useGetAllProductQuery()



    // const { value: products } = useAppSelector((state: RootState) => state.product)
    // dòng trên dùng cho redux tool kit
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])
    
    
    const removeProduct = (id:any)=>{
        console.log(id);
        
    //   product?.filter((item)=>item.id !== id)
        
        console.log(4);
        
    } 
    console.log(product);
    
    return (

        <div className="flex flex-col">
            <Link to={"/add"}> <button className
                ="group relative h-12 ml-[10px] w-[80px] overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">ADD</span>
            </button></Link>
            {/* <Button type="primary" icon={<DownloadOutlined />} >
            Download
          </Button> */}
            <div className="overflow-x-auto  sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block  sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        STT
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        NAME
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {product && product.map((item, index) => {
                                    return (
                                        <tr key={index} className="border-b">
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                {index + 1}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => { if (window.confirm("are you sure about that")) { removeProduct(item.id!) } }} className
                                                    ="group relative h-12  w-[80px] overflow-hidden rounded-lg bg-white text-lg shadow">
                                                    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                    <span className="relative text-black group-hover:text-white">DELETE</span>
                                                </button>
                                                <Link to={`/edit/${item.id}`}> <button className
                                                    ="group relative h-12 ml-[10px] w-[80px] overflow-hidden rounded-lg bg-white text-lg shadow">
                                                    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                    <span className="relative text-black group-hover:text-white">EDIT</span>
                                                </button></Link>

                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product