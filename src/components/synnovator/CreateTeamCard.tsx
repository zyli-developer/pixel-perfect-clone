import React from 'react';

export const CreateTeamCard: React.FC = () => {
  return (
    <article className="flex flex-col overflow-hidden relative aspect-[4.306] w-full items-stretch mt-3 pl-[18px] pb-[9px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a7e2210d0256dbe24330672b0d7811cd1e82f4be?placeholderIfAbsent=true"
        alt="Team creation background"
        className="absolute h-full w-full object-cover inset-0 rounded-xl"
      />
      <div className="relative flex w-full gap-5 text-center justify-between">
        <button className="text-[#00000E] text-sm leading-loose mt-[17px] font-normal hover:underline">
          创建团队
        </button>
        <button className="justify-center items-center bg-[#00000E] flex min-h-6 gap-1.5 text-xs text-white px-3 py-1 rounded-[15.75px] hover:bg-gray-800 transition-colors">
          <span className="self-stretch my-auto font-normal">加入队伍</span>
        </button>
      </div>
      <p className="relative text-[#00000E] text-xs leading-[22px] font-normal">
        我要找志同道合的朋友们
      </p>
    </article>
  );
};
