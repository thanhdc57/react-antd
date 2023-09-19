import React from 'react';
import {
  Card,
  Form,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
} from 'antd';

import TableForm from './TableForm';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default function AdvancedForm(){

  const formLabels = {
    name: '仓库名',
    url: '仓库域名',
    owner: '仓库管理员',
    approver: '审批人',
    dateRange: '生效日期',
    type: '仓库类型',
    name2: '任务名',
    url2: '任务描述',
    owner2: '执行人',
    approver2: '责任人',
    dateRange2: '生效日期',
    type2: '任务类型',
  };
  
  return (
    <div
    title="高级表单"
    style={{backgroundColor: '#e9e9e9', padding:"1px"}}
  >
    <Card title="仓库管理" bordered={false} style={{margin: "20px"}}>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col lg={6} md={12} sm={24}>
            <Form.Item label={formLabels.name}>
              <Input placeholder="请输入仓库名称" />
            </Form.Item>
          </Col>
          <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
            <Form.Item label={formLabels.url}>
              <Input
                style={{ width: '100%' }}
                addonBefore="http://"
                addonAfter=".com"
                placeholder="请输入"
              />
            </Form.Item>
          </Col>
          <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
            <Form.Item label={formLabels.owner}>
              <Select placeholder="请选择管理员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={6} md={12} sm={24}>
            <Form.Item label={formLabels.approver}>
              <Select placeholder="请选择审批员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
            <Form.Item label={formLabels.dateRange}>
              <RangePicker placeholder={['开始日期', '结束日期']} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
            <Form.Item label={formLabels.type}>
              <Select placeholder="请选择仓库类型">
                <Option value="private">私密</Option>
                <Option value="public">公开</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
    <Card title="任务管理" bordered={false} style={{margin: "20px"}}>
      <Form layout="vertical" >
        <Row gutter={16}>
          <Col lg={6} md={12} sm={24}>
            <Form.Item label={formLabels.name2}>
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
            <Form.Item label={formLabels.url2}>
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
            <Form.Item label={formLabels.owner2}>
              <Select placeholder="请选择管理员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col lg={6} md={12} sm={24}>
            <Form.Item label={formLabels.approver2}>
              <Select placeholder="请选择审批员">
                <Option value="xiao">付晓晓</Option>
                <Option value="mao">周毛毛</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
            <Form.Item label={formLabels.dateRange2}>
              <TimePicker
                placeholder="提醒时间"
                style={{ width: '100%' }}
                getPopupContainer={trigger => trigger.parentNode}
              />
            </Form.Item>
          </Col>
          <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
            <Form.Item label={formLabels.type2}>
              <Select placeholder="请选择仓库类型">
                <Option value="private">私密</Option>
                <Option value="public">公开</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
    <Card title="成员管理" bordered={false} style={{margin: "20px"}}>
      <TableForm />
    </Card>
  </div>
  )
}