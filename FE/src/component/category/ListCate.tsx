import React, { useEffect, useState } from 'react';
import { Select, Space, Button, Table, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../interfaces/Product';
import { EditOutlined, DeleteOutlined, RadiusUpleftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProduct } from '../../slice/productApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { useDeleteProductMutation, useGetAllProductQuery } from '../../services/product';
import { RootState } from '../../store/store';
import { toast } from 'react-toastify';
import { ICategory } from '../../interfaces/Product';



const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
// const onHandleDelete = ()=>{
//     toast.success('Success Notification !', {
//         position: toast.POSITION.TOP_RIGHT
//     });
// }

const onHandleDelete =async (id: any) => {
    // const result = await useDeleteProductMutation(id)
    //   .unwrap()
    //   .then(() => {
    //     // xóa sản phẩm thành công, cập nhật lại danh sách sản phẩm
    //   })
    //   .catch((err:any) => {
    //     console.error('Failed to delete product: ', err);
    //   });
    //   console.log(result);
      
}

const columns: ColumnsType<ICategory[]> = [
    {
        title: 'Name',
        dataIndex: 'name',

    },
    {
        title: 'Action',
        key: 'action',
        render: (record) => {
            return (
                <Space size="middle">
                    <Link to={`/update/${record.key}`} className='text-[20px]' ><EditOutlined /></Link>
                    <Button onClick={() => onHandleDelete(record.key)} className='text-[20px]'><DeleteOutlined /></Button>

                </Space>)
        }
    },
];
const ListProduct: React.FC = () => {
    const { data: product, isLoading, error } = useGetAllProductQuery()
    const [api, contextHolder] = notification.useNotification();
    const [datas, setDatas] = useState()


    const data: ICategory[] = [];
    useEffect(() => {
        if (product) {
            const a: any = product.map((newCategory: any) => {
                return {
                    key: newCategory.id,
                    ...newCategory
                }
            })
            setDatas(a)
        }
    }, [])




    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(getAllProduct())
    // }, [])

    // const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    // const [loading, setLoading] = useState(false);
    // const start = () => {
    //     setLoading(true);
    //     // ajax request after empty completing
    //     setTimeout(() => {
    //         setSelectedRowKeys([]);
    //         setLoading(false);
    //     }, 1000);
    // };
    return (

        <div>

           
            <div style={{ marginBottom: 16 }}>
            </div>
            {datas ? (<><Table columns={columns} dataSource={datas}  />;</>) : (<>
            </>)}
        </div>
    );



};

export default ListProduct;