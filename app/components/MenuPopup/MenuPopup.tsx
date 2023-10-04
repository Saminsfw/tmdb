import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { DotsHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { MenuPopupType } from "./MenuPopup.types";

const PopupMenu = ({ extraTriggerClasses }: MenuPopupType) => (
  <Popover.Root>
    <Popover.Trigger asChild className={extraTriggerClasses}>
      <button className="rounded-full w-[20px] h-[20px] inline-flex items-center justify-center bg-white opacity-60 hover:bg-lightGrey cursor-default outline-none">
        <DotsHorizontalIcon />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded-8 p-5 bg-white focus:bg-gray-50 border-2 border-violet-500"
        sideOffset={5}
      >
        <div className="flex flex-col gap-2.5">
          <label className="text-xs text-violet-500 ">Option 1</label>
          <label className="text-xs text-violet-500 ">Option 2</label>
          <label className="text-xs text-violet-500 ">Option 3</label>
          <label className="text-xs text-violet-500 ">Option 4</label>
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopupMenu;
