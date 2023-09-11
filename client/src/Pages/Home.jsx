import React from "react";
import DragAndDrop from "../utility/DragAndDrop";
import Titles from "../utility/Titles";
import Table from "../utility/Tables/Table";
import ButtonAddGroup from "../utility/button/ButtonAddGroup";
import GroupModals from "../utility/modals/groupModals";
import AllGroupsModal from "../utility/modals/AllGroupsModal";

const Home = () => {
  return (
    <div>
      <DragAndDrop />
      <div className="flex flex-col items-center ">
        <div className="flex gap-3 items-center justify-center">
          <Titles text={"All Fonts"}></Titles>
          {/* <ButtonAddGroup /> */}
          <GroupModals />
          <AllGroupsModal />
        </div>
        <Table></Table>
      </div>
    </div>
  );
};

export default Home;
