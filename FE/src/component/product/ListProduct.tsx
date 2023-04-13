import React, { useEffect, useState } from 'react';
import { Select, Space, Button, Table, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../interfaces/Product';
import { EditOutlined, DeleteOutlined, RadiusUpleftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { useDeleteProductMutation, useGetAllProductQuery } from '../../services/product';
import { RootState } from '../../store/store';
import { toast } from 'react-toastify';
import locale from 'antd/es/date-picker/locale/en_US';

const ListProduct: React.FC = () => {
    const columns: ColumnsType<IProduct> = [
        {
            title: 'Name',
            dataIndex: 'nameProduct',
    
        },
        {
            title: 'Price',
            dataIndex: 'priceProduct',
            render: (text) => `${text}VNĐ`,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: IProduct) => {
                return (
                    <Space size="middle">
                        <Link to={`/update-product/${record._id}`} className='text-[20px]' ><EditOutlined /></Link>
                        <a onClick={() => onHandleDelete(record._id!)} className='text-[20px]'><DeleteOutlined /></a>
    
                    </Space>)
            }
        },
    ];
    
    const { data: product, isLoading, error } = useGetAllProductQuery()
    const [api, contextHolder] = notification.useNotification();
    const [deleteProduct]=useDeleteProductMutation()
    const [datas, setDatas] = useState<IProduct[]>([]);
    let productList: IProduct[] = [];
    // if (Array.isArray(product)) {
    //   productList = product;
    // } else if (typeof product === 'object') {
    //   productList = Object.values(product);
    // }
    console.log(product);
    useEffect(() => {
        if (product) {
            const {data}:any = product
            console.log(data)
            const a: IProduct[] = data.map((newProduct: IProduct) => {
                
                return {
                  key: newProduct._id,
                  ...newProduct
                };
              });
            setDatas(a)
            console.log(a);
            
        }
    }, [product])


    const onHandleDelete =async (_id: string) => {
       deleteProduct(_id)
          
    }
    

    return (
        <div>
            <Space wrap>
                <Select
                    defaultValue="--------Chọn đi--------"
                    style={{ width: 220 }}
                    allowClear
                    options={[
                        { value: '1', label: 'Giá dưới 1 nghìn VNĐ' },
                        { value: '2', label: 'Giá trên 1 nghìn VNĐ' },
                        { value: '3', label: 'Giá trên 50 nghìn VNĐ' },
                    ]}
                />
            </Space>
            <div style={{ marginBottom: 16 }}>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Dữ liệu chết rồi ok</p>
            ) : (
                 (<> <Table columns={columns} dataSource={datas.map((item,index)=>({...item,key:index}))}  /></>)
            )}
        </div>
    );
};
export default ListProduct

