import ContentLayout from '@components/ContentLayout';
import styled from 'styled-components';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const MainContentsWrapper = styled.div`
  font-weight: 300;
  width: 100%;
  span {
    font-weight: 600;
  }
  margin-bottom: 20px;
`;

const ServiceDisplay = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const PostContainer = styled.div`
  border: 1px solid #dedede;
  padding: 50px;
  margin-bottom: 100px;
  margin-top: 50px;
`;
const PostTitle = styled.div`
  border-bottom: 1px solid #dedede;
  padding-bottom: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
  }
`;

const PostTitleRightSide = styled.div`
  span {
    font-size: 18px;
    font-weight: 300;
  }
`;
const PostDescription = styled.div`
  min-height: 500px;
  .ql-editor {
    min-height: 500px;
    strong {
      font-weight: 900;
    }
  }
`;

const SubmitButtonContainer = styled.div`
  text-align: right;
  margin-top: 30px;
`;
const SubmitButton = styled.input`
  padding: 10px 40px;
  border: none;
  background-color: ${(props) => props.theme.color.blue};
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const CheckBoxContianer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const CheckBoxLeftSide = styled.div`
  width: 140px;
`;
const CheckBoxRightSide = styled.div``;
const CheckBoxCategory = styled.div`
  display: flex;
  align-items: center;
  label {
    padding-right: 30px;
  }
`;
const CheckBoxCategoryTitle = styled.div`
  font-weight: 600;
  margin-right: 20px;
`;
const CheckBoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InfoInputContainer = styled.div`
  margin-bottom: 50px;
`;
const InfoInputItem = styled.div`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const InfoInputTitle = styled.div`
  width: 140px;
  display: inline-block;
`;

const QuillWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    [{ align: [] }],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
];

const Write = () => {
  const [content, setContent] = useState('');
  console.log({ content });
  return (
    <ContentLayout
      title='?????? ??????'
      bannerImgUrl='/banner4.jpg'
      headTitle='?????? ??????'
    >
      <MainContentsWrapper>
        <ServiceDisplay>INQUERY</ServiceDisplay>
        <PostContainer>
          <form>
            <CheckBoxContianer>
              <CheckBoxLeftSide>????????????</CheckBoxLeftSide>
              <CheckBoxRightSide>
                <CheckBoxCategory style={{ marginBottom: '10px' }}>
                  <CheckBoxCategoryTitle>?????????</CheckBoxCategoryTitle>
                  <CheckBoxContent>
                    <label>
                      <input
                        type='checkbox'
                        name='program'
                        value='DEFAULT_CONSULTING'
                      />
                      ?????? ?????????
                    </label>
                    <label>
                      <input
                        type='checkbox'
                        name='program'
                        value='DETAIL_CONSULTING'
                      />
                      ?????? ?????????
                    </label>
                  </CheckBoxContent>
                </CheckBoxCategory>
                <CheckBoxCategory>
                  <CheckBoxCategoryTitle>?????????</CheckBoxCategoryTitle>
                  <CheckBoxContent>
                    <label>
                      <input type='checkbox' name='program' value='BRANDING' />
                      ?????????
                    </label>
                    <label>
                      <input type='checkbox' name='program' value='INTERIOR' />
                      ????????????
                    </label>

                    <label>
                      <input type='checkbox' name='program' value='SYSTEM' />
                      ?????????
                    </label>
                    <label>
                      <input type='checkbox' name='program' value='MANAGING' />
                      ????????????
                    </label>
                    <label>
                      <input type='checkbox' name='program' value='MARKETING' />
                      ??????/?????????
                    </label>
                  </CheckBoxContent>
                </CheckBoxCategory>
              </CheckBoxRightSide>
            </CheckBoxContianer>

            <InfoInputContainer>
              <InfoInputItem>
                <label>
                  <InfoInputTitle>?????? :</InfoInputTitle>
                  <input placeholder='' name='title' />
                </label>
              </InfoInputItem>

              <InfoInputItem>
                <label>
                  <InfoInputTitle>????????? :</InfoInputTitle>
                  <input placeholder='' name='old' />
                </label>
              </InfoInputItem>
              <InfoInputItem>
                <label>
                  <InfoInputTitle>????????? :</InfoInputTitle>
                  <input placeholder='' name='phone' />
                </label>
              </InfoInputItem>
              <InfoInputItem>
                <label>
                  <InfoInputTitle>email :</InfoInputTitle>
                  <input placeholder='' name='email' />
                </label>
              </InfoInputItem>
              <InfoInputItem>
                <label>
                  <InfoInputTitle>?????? ??????(??????) :</InfoInputTitle>
                  <input placeholder='' name='address' />
                </label>
              </InfoInputItem>
            </InfoInputContainer>
            <PostTitle>
              <input placeholder='??????' name='title' />
            </PostTitle>
            <PostDescription>
              <QuillWrapper
                theme='snow'
                placeholder='placeholde&#13;&#10;gkqsek'
                modules={modules}
                formats={formats}
                onChange={setContent}
              />
            </PostDescription>
            <SubmitButtonContainer>
              <SubmitButton type='submit' value='??????' />
            </SubmitButtonContainer>
          </form>
        </PostContainer>
      </MainContentsWrapper>
    </ContentLayout>
  );
};

export default Write;
