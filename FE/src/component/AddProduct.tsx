import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from '../store/index'
import { useAppSelector } from '../store/index'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../interfaces/Product'
import { addProduct } from '../slice/productApi'
type Props = {}

const AddProduct = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm<IProduct>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const addNewP:SubmitHandler<IProduct> = (product)=>{
    dispatch(addProduct(product)).then(()=>{
      navigate("/")
      alert("Thêm thành công!!!")
    })
  }
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form className="py-6 px-9" onSubmit={handleSubmit(addNewP)} >
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                Tên của
              </label>
              <input {...register("name",{required:true})} type="text" name="name" id="name" placeholder="your name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              {errors.name &&  <p>phải nhập</p>}
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

