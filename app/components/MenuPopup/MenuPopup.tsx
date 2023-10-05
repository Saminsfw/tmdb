import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MenuPopupType } from "./MenuPopup.types";

const PopupMenu = ({ links, extraTriggerClasses }: MenuPopupType) => (
  <Popover.Root>
    <Popover.Trigger asChild className={extraTriggerClasses}>
      <button className="rounded-full w-[20px] h-[20px] inline-flex items-center justify-center bg-white opacity-60 hover:bg-lightGrey cursor-default outline-none">
        <BiDotsHorizontalRounded />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded-8 p-5 bg-gray-50 shadow-l border-2 border-lightBrown"
        sideOffset={5}
      >
        <div className="flex flex-col gap-2.5 text-xs">
          {links.map((link, index) => (
            <label key={index}>{link.text}</label>
          ))}
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopupMenu;
