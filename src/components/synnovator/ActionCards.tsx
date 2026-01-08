import React from 'react';

export const FindTeammatesCard: React.FC = () => {
  return (
    <article className="flex-1 bg-[#74FFBB] rounded-xl pl-[18px] pr-px pb-[11px] cursor-pointer hover:scale-105 transition-transform">
      <div className="z-10 flex mt-[-17px] items-stretch gap-[21px] text-base text-center leading-none">
        <div className="text-[#00000E] mt-8 font-normal">找队友</div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1bc0ad056d149fb989f7e72600cc951d8faa4cf6?placeholderIfAbsent=true"
          alt="找队友图标"
          className="aspect-[1.05] object-contain w-[62px] shrink-0"
        />
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal">
        找呀找呀找朋友～
      </div>
    </article>
  );
};

export const FindIdeasCard: React.FC = () => {
  return (
    <article className="flex-1 bg-[#BBFD3B] rounded-xl pl-[18px] pr-[3px] pb-[11px] cursor-pointer hover:scale-105 transition-transform">
      <div className="flex gap-[5px] flex-1">
        <div className="z-10 flex flex-col items-stretch mt-[15px]">
          <div className="text-[#00000E] text-center text-base leading-none font-normal">
            找点子
          </div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal">
            找个好点子～
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c7f50feba90297a5662a82ad859ec6852efc3246?placeholderIfAbsent=true"
          alt="找点子图标"
          className="aspect-[1] object-contain w-[52px] mt-[-15px] shrink-0"
        />
      </div>
    </article>
  );
};

export const PublishProposalCard: React.FC = () => {
  return (
    <article className="mt-3 bg-[#41FAF4] rounded-xl pl-[18px] pr-[62px] py-[13px] cursor-pointer hover:scale-105 transition-transform">
      <div className="text-[#00000E] text-center text-sm leading-loose font-normal">
        发布提案
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal">
        发布一个小提案啦啦啦啦啦～
      </div>
    </article>
  );
};

export const SocialMediaCard: React.FC = () => {
  return (
    <article className="bg-[#8AFF80] rounded-xl pt-px pb-[11px] px-[18px] cursor-pointer hover:scale-105 transition-transform">
      <div className="flex gap-5 text-sm text-center leading-loose justify-between">
        <div className="text-[#00000E] mt-3.5 font-normal">社交媒体</div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/720731aab5f5b3b84e6915def17799088ec1bc1b?placeholderIfAbsent=true"
          alt="社交媒体图标"
          className="aspect-[1] object-contain w-9 shrink-0"
        />
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal">
        发布一个小媒体啦啦啦啦啦～
      </div>
    </article>
  );
};

export const TeamMediaCard: React.FC = () => {
  return (
    <article className="bg-[#74FFBB] rounded-xl px-[17px] py-[13px] cursor-pointer hover:scale-105 transition-transform">
      <div className="text-[#00000E] text-center text-sm leading-loose font-normal">
        团队媒体
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal">
        团队相关哦
      </div>
    </article>
  );
};
