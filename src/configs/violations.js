import React from 'react';
import {Tag, Divider} from 'antd';
const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Violation',
      dataIndex: 'violation',
      key: 'violation',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 7 ? 'red' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      date: "21/12/2016",
      address: 'New York No. 1 Lake Park',
      tags: ['certificate'],
      violation: `OC issued in 2007 after the expiry of 2003 central
      government amnesty scheme, in the name of owner of
      Western Circus, a resident of West Bengal by Jharkhand
      Forest Department (FD)`
    },
    {
      key: '2',
      name: 'Jim Green',
      date: "21/12/2019",
      address: 'London No. 1 Lake Park',
      tags: ['health'],
      violation: 'Order of inquiry by RFD'
    },
    {
      key: '3',
      name: 'Joe Black',
      date: "21/12/2019",
      address: 'Sidney No. 1 Lake Park',
      tags: ['location' ],
      violation: `‘Transport Permit (TP)’ reported to be issued by Uttar
Pradesh FD and RFD`
    },
    {
      key: '4',
      name: 'Joe Black',
      date: "21/12/2019",
      address: 'Sidney No. 1 Lake Park',
      tags: ['location'],
      violation: `‘Transport Permit (TP)’ reported to be issued by Uttar
Pradesh FD and RFD`
    },
  ];

  export {columns, data};