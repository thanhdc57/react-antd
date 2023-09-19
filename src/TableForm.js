import React, {Fragment } from 'react';
import { Table, Button, Input } from 'antd';

export default function TableForm() {


  const tableData = [
    {
      key: '1',
      workId: '00001',
      name: 'John Brown',
      department: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      workId: '00002',
      name: 'Jim Green',
      department: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      workId: '00003',
      name: 'Joe Black',
      department: 'Sidney No. 1 Lake Park',
    },
  ];

  const columns = [
    {
      title: '成员姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
            />
          );
        }
        return text;
      },
    },
    {
      title: '工号',
      dataIndex: 'workId',
      key: 'workId',
      width: '20%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input

            />
          );
        }
        return text;
      },
    },
    {
      title: '所属部门',
      dataIndex: 'department',
      key: 'department',
      width: '40%',
      render: (text, record) => {
        if (record.editable) {
          return (
            <Input
            />
          );
        }
        return text;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <a >编辑</a>
          
          </span>
        );
      },
    },
  ];

  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}

      />
      <Button
        style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
        type="dashed"
        icon="plus"
      >
        新增成员
      </Button>
    </Fragment>
  )
}