import { RiMoneyRupeeCircleFill } from "@remixicon/react";
import clsx from "clsx";
import React from "react";

interface Props {
  selected: boolean;
}

const workflows = ({ selected }: Props) => {
  return (
    <div>
      <RiMoneyRupeeCircleFill
        className={clsx(
          "dark:group-hover:fill-[#C8C7FF] transition-all dark:fill-[#353346] fill-[#BABABB] group-hover:fill-[#7540A9]",
          { "dark:!fill-[#C8C7FF] !fill-[#7540A9] ": selected }
        )}
      />
    </div>
  );
};

export default workflows;
