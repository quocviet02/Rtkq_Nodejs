import React from 'react';
import { Form, Input, InputNumber, Typography, Button, Select, Space} from 'antd';

const AddCate: React.FC = () => {
  const [form] = Form.useForm<{ name: string; price: number }>();
  const nameValue = Form.useWatch('name', form);

  return (
    <div className='w-[500px] mx-auto'>
      <h1 className='text-center mb-[40px] text-[30px] mt-[20px]'>Thêm mới loại hàng</h1>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Name Product">
          <Input />
        </Form.Item>
      
      </Form>

      <Button block className='mt-[20px]'>Submit</Button>
    </div>
  );
};

export default AddCate;