import React from 'react';
import Button from './Button';
import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const CoursesCard = ({ title, description, buyers, price }) => {
  return (
    <div className="h-full w-full rounded-xl border border-gray-600 bg-slate-100/5 p-2 backdrop-blur-lg">
      <div className="h-full rounded-lg bg-white px-5 py-6">
        <div className="flex h-full flex-col gap-12">
          <div className="flex h-4/5 flex-col gap-4">
            <h4 className="font-oddval line-clamp-1 text-xl text-gray-900">{title}</h4>
            <p className="font-inter text-sm text-zinc-600">{description}</p>
          </div>
          <div className="flex h-1/5 flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-600">
              <UserIcon className="size-3" />
              <p className="font-inter text-[10px] font-medium">
                <span className="font-bold">{buyers}</span> persoane au achiziționat
              </p>
            </div>
            <div className="flex items-end justify-between">
              <p className="font-oddval text-2xl text-gray-900">
                {price} <span className="text-base text-zinc-600">RON</span>
              </p>
              <Button variant="buy" link="/buy">
                <ShoppingBagIcon className="size-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
