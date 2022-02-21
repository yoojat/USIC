import styled from 'styled-components';
import { media } from '../styles/theme';

const PlanItem = styled.div<{ themeColor?: string }>`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  border-radius: 5px;
  border-top: 10px solid
    ${(props) => props.themeColor || props.theme.color.secondBlue};
  margin-right: 20px;
  margin-left: 20px;
  background-color: rgba(218, 229, 241, 0.3);
  margin-bottom: 50px;
  width: 100%;
  min-height: 700px;
  max-width: 300px;
  ${media.mobile} {
    max-width: 600px;
  }
`;
const TopContentWrapper = styled.div`
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: white;
`;
const PlanSmallTitle = styled.h2`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-weight: 400;
  color: rgb(98, 110, 143);
  font-size: 15px;
  margin-bottom: 25px;
`;
const PlanTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const PlanSubTitle = styled.div`
  color: rgb(98, 110, 143);
  font-size: 16px;
  font-weight: 400;
  height: 30px;
  line-height: 1.3;
`;
const BottomContentWrapper = styled.div`
  color: rgb(98, 110, 153);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 800px;
`;

const ContentItemsContainer = styled.div``;

const ContentItem = styled.div`
  margin-bottom: 30px;
`;
const ContentTitle = styled.h4<{ themeColor?: string }>`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  line-height: 1.4;
  span {
    color: ${(props) => props.themeColor || props.theme.color.secondBlue};
  }
`;
const ContentDescription = styled.div`
  font-size: 14px;
  line-height: 1.6;
`;

const ConsultingButton = styled.button<{ themeColor?: string }>`
  background-color: ${(props) =>
    props.themeColor || props.theme.color.mainBlue};
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  text-shadow: 2px 2px 3px black;
  box-shadow: 3px 3px 5px #dedede;
  &:hover {
    background-color: ${(props) => props.theme.color.thirdBlue};
  }
`;

interface IProps {
  category: string;
  planTitle: string;
  planSubtitle: string;
  contents: { title: string; descriptions: string[] }[];
  themeColor?: string;
}

const ServiceItem = ({
  category,
  planTitle,
  planSubtitle,
  contents,
  themeColor,
}: IProps) => (
  <PlanItem themeColor={themeColor}>
    <TopContentWrapper>
      <PlanSmallTitle>{category}</PlanSmallTitle>
      <PlanTitle>{planTitle}</PlanTitle>
      <PlanSubTitle>{planSubtitle}</PlanSubTitle>
    </TopContentWrapper>
    <BottomContentWrapper>
      <ContentItemsContainer>
        {contents.map((content, index) => (
          <ContentItem key={index}>
            <ContentTitle themeColor={themeColor}>
              <span>· </span>
              {content.title}
            </ContentTitle>
            <ContentDescription>
              {content.descriptions.map((descpription, pIndex) => (
                <p key={pIndex}>{descpription}</p>
              ))}
            </ContentDescription>
          </ContentItem>
        ))}
      </ContentItemsContainer>
      <ConsultingButton themeColor={themeColor}>상담하기</ConsultingButton>
    </BottomContentWrapper>
  </PlanItem>
);

export default ServiceItem;
