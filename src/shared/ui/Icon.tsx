type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export const Icon = ({ name, size, className }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
};
