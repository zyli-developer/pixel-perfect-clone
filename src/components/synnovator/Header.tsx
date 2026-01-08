import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col items-stretch">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/c2e9894eba2c84c95ff5e48db96c17506da413e9?placeholderIfAbsent=true"
        alt="Synnovator Logo"
        className="aspect-[4.74] object-contain w-[180px] max-w-full"
      />
      <div className="rounded flex w-[264px] max-w-full flex-col text-xs text-[#00000E] leading-[22px] mt-1.5 px-[7px]">
        <h1 className="text-[#00000E] z-10 font-normal">
          大家都在Synnovator寻找机会
        </h1>
      </div>
    </header>
  );
};
