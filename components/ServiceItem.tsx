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
`;
const BottomContentWrapper = styled.div`
  color: rgb(98, 110, 153);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const ContentItem = styled.div`
  margin-bottom: 20px;
`;
const ContentTitle = styled.h4<{ themeColor?: string }>`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  span {
    color: ${(props) => props.themeColor || props.theme.color.secondBlue};
  }
`;
const ContentDescription = styled.div`
  font-size: 14px;
  line-height: 1.6;
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
    </BottomContentWrapper>
  </PlanItem>
);

export default ServiceItem;
