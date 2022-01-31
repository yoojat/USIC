interface IProps {
  color?: string;
}

const ArrowIcon = ({ color = '#fff' }: IProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='12'
    height='12'
    viewBox='0 0 24 24'
    fill={color}
  >
    <path d='M21 12l-18 12v-24z' />
  </svg>
);

export default ArrowIcon;
