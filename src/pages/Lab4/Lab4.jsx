import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';

import { inputData } from './data';
import { makeCalculations } from './helpers';
import * as S from './Lab4.styled';

const Lab4 = () => {
  const [result, setResult] = useState({
    dj1: '',
  });
  const [form] = Form.useForm();
  const initialValues = inputData.reduce(
    (prev, next) => ({ ...prev, [next.name]: next.value }),
    {},
  );

  const handleValuesChange = (_, allValues) => {
    const goodValues = Object.entries(allValues).reduce(
      (p, next) => ({ ...p, [next[0]]: parseFloat(next[1]) }),
      {},
    );
    setResult(makeCalculations(goodValues));
  };

  useEffect(() => {
    handleValuesChange(null, initialValues);
  }, []);

  return (
    <S.Wrapper>
      <S.Form
        labelAlign="left"
        labelCol={{ span: 13 }}
        wrapperCol={{ span: 10 }}
        form={form}
        initialValues={initialValues}
        layout="horizontal"
        onValuesChange={handleValuesChange}
      >
        {inputData.map(({ name, description }) => (
          <Form.Item key={name} name={name} label={description}>
            <Input type="number" placeholder={name} data-name={name} />
          </Form.Item>
        ))}
      </S.Form>
      <S.Result>
        Результати обрахування:
        <div dangerouslySetInnerHTML={{ __html: result.dj1 }} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: result.dj2 }} />
      </S.Result>
    </S.Wrapper>
  );
};

export default Lab4;
