// import React,{useEffect} from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { useAppDispatch } from '../store/index'
// import { useAppSelector } from '../store/index'
// import { useNavigate, useParams } from 'react-router-dom'
// import { IProduct } from '../interfaces/Product'
// import { RootState } from '../store/store'
// import { getProduct } from '../slice/productApi'
// import { editProduct } from '../slice/productApi'
// type Props = {}

// const EditProduct = (props: Props) => {
//   const dispatch = useAppDispatch()
//   const navigate = useNavigate()



//   const { id } = useParams();
//   console.log(id);
  
//   const { item } = useAppSelector((state: RootState) => state.product);
//   console.log(item);
  
//   const {
//     register,
//     handleSubmit,
//     formState:{errors}
//   }=useForm<IProduct>()
//   const editP:SubmitHandler<IProduct> = (product)=>{
//     dispatch(editProduct({id:item.id,...product})).then(()=>{
//       console.log(product);
      
//       navigate("/")
//     })
//   }
 
//   useEffect(()=>{
//     dispatch(getProduct(id!))
//   },[])
//   //sau khi render giao diện thì chạy vào đây để lấy dữ liệu up lên form
  
//   return (
//     <div>
//       <div className="flex items-center justify-center p-12">
//         <div className="mx-auto w-full max-w-[550px] bg-white">
//           <form className="py-6 px-9" onSubmit={handleSubmit(editP)} >
//             <div className="mb-5">
//               <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
//                 Tên của
//               </label>
//               <input defaultValue={item.name} {...register("name",{required:true})} type="text" name="name" id="name" placeholder="your name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
//               {errors.name &&  <p>phải nhập</p>}
//             </div>

//             <div>
//               <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
//                 Thêm
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default EditProduct