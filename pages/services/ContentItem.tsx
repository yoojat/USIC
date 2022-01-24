import Image from 'next/image';
import styled from 'styled-components';

const ContentItemWrapper = styled.div`
  text-align: center;
  background-color: ${(props) => props.them};
`;
const ContentItemTitle = styled.div`
  background-color: ${(props) => props.theme.color.blue};
  width: 60%;
  padding: 10px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  display: inline-block;
  margin-top: 30px;
  color: white;
`;
const ContentItemSubTitle = styled.div`
  font-size: 16px;
  padding: 20px;
`;
const ContentItemImage = styled.div``;

interface IProps {
  title: string;
  subTitle: string;
  imageSrc: string;
}

const ContentItem = ({ title, subTitle, imageSrc }: IProps) => {
  return (
    <ContentItemWrapper>
      <ContentItemTitle>{title}</ContentItemTitle>
      <ContentItemSubTitle>{subTitle}</ContentItemSubTitle>
      <ContentItemImage>
        <Image src={imageSrc} width={900} height={530} objectFit={'contain'} />
      </ContentItemImage>
    </ContentItemWrapper>
  );
};

export default ContentItem;
