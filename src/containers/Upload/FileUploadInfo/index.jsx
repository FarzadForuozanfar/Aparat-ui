import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Tabs, Tab } from '@mui/material';

import SelectBox from '../../../components/SelectBox';

const Wrapper = styled.div`
  flex-grow: 1;

  & .tabs {
    border-bottom: 1px solid #ddd;

    & .MuiTabs-indicator {
      background-color: #666;
      height: 1px;
    }
  }

  & .tabContent {
    padding: 1rem;
  }

  & .inputWrapper {
    label {
      font-weight: bold;
      padding-bottom: 0.8rem;
      display: inline-block;
    }

    .input {
      padding: 12px;
      margin: 5px 0;
      border-radius: 5px;
      border: 1px solid #ddd !important;
      outline: none !important;
      width: 100%;
    }
  }
`;

function FileUploadInfo() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState({
    title: 'foo',
    category: '1',
  });

  return (
    <Wrapper>
      <Tabs
        value={selectedTab}
        onChange={(e, tabIndex) => {
          setSelectedTab(tabIndex);
        }}
        indicatorColor="primary"
        textColor="primary"
        className="tabs"
      >
        <Tab label="مشخصات ویدیو" />
        <Tab label="تنظیمات پیشترفته" />
      </Tabs>

      <Grid container>
        {selectedTab === 0 && (
          <Grid container spacing={1} className="tabContent">
            <Grid item xs={12} sm={6} className="inputWrapper">
              <label htmlFor="inp-title">عنوان ویدیو</label>
              <input
                id="inp-title"
                type="text"
                className="input"
                defaultValue={data.title}
                onChange={e =>
                  setData({ ...data, title: e.target.value.trim() })
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} className="inputWrapper">
              <label htmlFor="inp-category">دسته بندی آپارات</label>
              <SelectBox
                id="inp-category"
                options={{ '1': 'one', '2': 'tow' }}
                value={data.category}
                onChange={value => setData({ ...data, category: value })}
              />
            </Grid>
          </Grid>
        )}
        {selectedTab === 1 && (
          <Grid item className="tabContent">
            dovomi
          </Grid>
        )}
      </Grid>

      {/* <Dump data={data} /> */}
    </Wrapper>
  );
}

export default FileUploadInfo;
