import React from "react";
import { useRecoilValue } from "recoil";
import { memberDataState } from "store/members";
import Avatar from "@/members/Avatar";

function Memebers() {
  const members = useRecoilValue(memberDataState);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center">
      {members?.teamMember !== undefined ? (
        members.teamMember.map((item) => (
          <Avatar key={item.name} name={item.name} role={item.role} img={item.img} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Memebers;
