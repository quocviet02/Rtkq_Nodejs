import React from 'react';
import { Form, Input, InputNumber, Typography, Button} from 'antd';

const UpdateProduct: React.FC = () => {
  const [form] = Form.useForm<{ name: string; price: number }>();
  const nameValue = Form.useWatch('name', form);

  return (
    <div className='w-[500px] mx-auto'>
      <h1 className='text-center mb-[40px] text-[30px] mt-[20px]'>Update loại hàng</h1>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Name Product">
          <Input />
        </Form.Item>
      </Form>

      <Button block>Submit</Button>
    </div>
  );
};

export default UpdateProduct;