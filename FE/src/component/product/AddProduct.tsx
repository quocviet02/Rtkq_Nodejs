import React, { useState, ChangeEvent } from 'react';
import { Alert, Button, Checkbox, Form, Input, InputNumber, Space } from 'antd';
import { IProduct } from '../../interfaces/Product';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddProductMutation } from '../../services/product';
import { useNavigate } from 'react-router-dom';

const AddProduct: React.FC = () => {


  const [addProduct, result] = useAddProductMutation();
  const navigate = useNavigate();
  // <Space direction="vertical" style={{ width: '100%' }}>
  // <Alert message="Success Tips" type="success" showIcon />
  // <Alert
  //   message="Success Tips"
  //   description="Detailed description and advice about successful copywriting."
  //   type="success"
  //   showIcon
  // />
  // </Space>

  const onFinish = (values: any) => {
    addProduct(values)
    console.log('Success:', values);
    navigate("/")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='w-[500px] mx-auto'>
      <h1 className='text-center mb-[40px] text-[30px] mt-[20px]'>Thêm mới sản phẩm</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name Product"
          name="nameProduct"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price Product"
          name="priceProduct"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <InputNumber />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" block danger htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default AddProduct;