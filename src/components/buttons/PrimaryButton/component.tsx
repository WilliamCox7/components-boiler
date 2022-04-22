import React, { MouseEventHandler } from 'react';
import Styled from './component.style';
import * as Phosphor from 'phosphor-react';
import theme from '@theme';

const { CircleNotch } = Phosphor;

export enum ValidSizes {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum ValidSides {
  RIGHT = 'right',
  LEFT = 'left',
}

export interface PrimaryButtonProps {
  size?: `${ValidSizes}`;
  label: string;
  icon?: keyof typeof Phosphor;
  iconSide?: `${ValidSides}`;
  disabled?: boolean;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = ({
  size = ValidSizes.MEDIUM,
  label,
  icon,
  iconSide = ValidSides.RIGHT,
  disabled = false,
  loading = false,
  onClick,
}: PrimaryButtonProps) => {
  const Icon: any = icon && Phosphor[icon];
  return (
    <Styled.Button
      onClick={onClick}
      disabled={disabled}
      size={size}
      icon={!!icon}>
      {loading ? (
        <Styled.Spinner>
          <CircleNotch
            color={disabled ? theme.colors.grey[5] : theme.colors.brand.white}
            weight="bold"
            size={size === ValidSizes.LARGE ? '32px' : '28px'}
          />
        </Styled.Spinner>
      ) : (
        <>
          {iconSide === ValidSides.LEFT && Icon && (
            <Styled.IconLeftContainer size={size}>
              <Icon
                color={
                  disabled ? theme.colors.grey[5] : theme.colors.brand.white
                }
                weight="bold"
              />
            </Styled.IconLeftContainer>
          )}
          {label}
          {iconSide === ValidSides.RIGHT && Icon && (
            <Styled.IconRightContainer>
              <Icon
                color={
                  disabled ? theme.colors.grey[5] : theme.colors.brand.white
                }
                weight="bold"
              />
            </Styled.IconRightContainer>
          )}
        </>
      )}
    </Styled.Button>
  );
};

export default PrimaryButton;
