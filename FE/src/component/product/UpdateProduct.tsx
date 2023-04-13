import React from 'react';
import { Form, Input, InputNumber, Typography, Button} from 'antd';
import { useGetProductQuery, useUpdateProductMutation } from '../../services/product';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../interfaces/Product';
import { useNavigate } from 'react-router-dom';


const UpdateProduct: React.FC = () => {
  const { id='' } = useParams<{ id: string }>();
  const naviage = useNavigate()
  const { data: product, isLoading: isProductLoading, error: productError } = useGetProductQuery(id);
  const [updateProduct, { isLoading: isUpdating, error: updateError }] = useUpdateProductMutation();
  console.log(product);
  

  const onFinish = (values: IProduct) => {
    updateProduct({ _id: id, ...values });
    naviage('/')
  };
  return (
    <div className='w-[500px] mx-auto'>
      <h1 className='text-center mb-[40px] text-[30px] mt-[20px]'>Update sản phẩm</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          nameProduct: product?.data?.nameProduct,
          priceProduct: product?.data?.priceProduct,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name Product"
          name="nameProduct"
          rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price Product"
          name="priceProduct"
          rules={[{ required: true, message: 'Please input product price!' }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" block danger htmlType="submit" loading={isUpdating}>
            Update Product
          </Button>
        </Form.Item>
        
      </Form>
    </div>
  );
};

export default UpdateProduct;
