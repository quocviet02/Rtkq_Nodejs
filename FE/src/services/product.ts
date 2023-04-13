import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IProduct } from "../interfaces/Product"


export const productAPI = createApi({
    reducerPath:"product",
    tagTypes:['Posts'],
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_BASE_URL}),

    endpoints:(builder)=>({
        getAllProduct:builder.query<IProduct[],void>({
           
            query:()=>`product/product`,
            providesTags(result){
                if (typeof result !== "undefined" && Array.isArray(result)) {
                    const final = [
                        ...result.map(({_id})=>({type:'Posts' as const,_id})),
                        {type:'Posts' as const, id:'LIST'}
                    ]
                    return final
                }
                const final = [{type:'Posts'as const,id:'LIST'}]
                return final
            }
        }),
        
        getProduct: builder.query<IProduct, string>({
            query: (id) => `product/product/${id}`,
          }),
        addProduct:builder.mutation<IProduct, Partial<IProduct>>({
            query:(body)=>{
                return{
                    url:`product/product`,
                    method:"POST",
                    body
                }
            },
            invalidatesTags:(result,error, body)=>[{type:'Posts',_id:"LIST"}]
        }),
        updateProduct:builder.mutation<IProduct,Partial<IProduct>>({
            query:(data)=>{
                return{
                    url:`product/product/${data._id}`,
                    method:"PUT",
                    body:data
                }
            },
            invalidatesTags:(result,error, data)=>[{type:'Posts',_id:data._id}]
        }),
        deleteProduct:builder.mutation<{}, string>({
            query:(_id)=>{
                return{
                    url:`product/product/${_id}`,
                    method:"DELETE"
                }
            },
            invalidatesTags:(result,error, _id)=>[{type:'Posts',_id}]
        })

    })
})
export const {
    useGetAllProductQuery,
    useGetProductQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
}=productAPI