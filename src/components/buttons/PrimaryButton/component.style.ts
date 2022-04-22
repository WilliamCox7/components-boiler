import styled from 'styled-components';
import tw from 'twin.macro';
import { ValidSizes } from './component';

export interface ButtonProps {
  size: `${ValidSizes}`;
  icon?: boolean;
}

export interface IconProps {
  size: `${ValidSizes}`;
}

const Styled = {
  Spinner: styled.span(() => tw`animate-spin`),
  Button: styled.button(({ size, icon }: ButtonProps) => [
    tw`
      flex items-center
      bg-brand-green hover:bg-green-11 active:bg-green-12 disabled:bg-grey-2
      focus:ring focus:ring-green-3
      text-brand-white disabled:text-grey-5
      px-[28px] rounded
    `,
    size === ValidSizes.LARGE &&
      tw`py-[17px] h-[60px] text-[20px] leading-[25px] tracking-[-0.02em]`,
    size === ValidSizes.MEDIUM &&
      tw`py-[14px] h-[52px] text-[18px] leading-[22.5px] tracking-[-0.02em]`,
    size === ValidSizes.SMALL &&
      tw`py-[11px] h-[42px] text-[16px] leading-[20px] tracking-[-0.02em]`,
    icon && size === ValidSizes.SMALL && tw`px-l`,
  ]),
  IconLeftContainer: styled.span(({ size }: IconProps) => [
    tw`flex mr-[28px]`,
    size === ValidSizes.SMALL && tw`mr-m`,
  ]),
  IconRightContainer: styled.span(() => tw`flex ml-[28px]`),
};

export default Styled;
