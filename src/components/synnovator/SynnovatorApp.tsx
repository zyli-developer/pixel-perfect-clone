import React from 'react';
import { Header } from './Header';
import { 
  FindTeammatesCard, 
  FindIdeasCard, 
  PublishProposalCard, 
  SocialMediaCard, 
  TeamMediaCard 
} from './ActionCards';
import { CreateTeamCard } from './CreateTeamCard';
import { ProfileAvatar } from './ProfileAvatar';

export const SynnovatorApp: React.FC = () => {
  return (
    <main className="max-w-[328px] font-normal mx-auto">
      <div className="flex w-full flex-col items-stretch pt-4 pb-2.5 px-[9px] rounded-[20px]">
        <Header />
        
        {/* Main action cards */}
        <section className="flex w-full items-stretch gap-2 mt-[193px]">
          <FindTeammatesCard />
          <FindIdeasCard />
        </section>

        {/* Publish proposal */}
        <PublishProposalCard />

        {/* Media cards */}
        <section className="flex items-stretch gap-2 mt-3">
          <SocialMediaCard />
          <TeamMediaCard />
        </section>

        {/* Create team */}
        <CreateTeamCard />

        {/* Profile avatar */}
        <ProfileAvatar />
      </div>
    </main>
  );
};
