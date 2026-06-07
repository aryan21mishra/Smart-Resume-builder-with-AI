import React, { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";
import ProjectHeader from "./ProjectHeader";

const ProjectCLient = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [editIndex, setEditIndex] = useState(null);
  return (
    <>
      <ProjectHeader />
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="list">
          <ProjectList setActiveTab={setActiveTab} setEditIndex={setEditIndex} />
        </TabsContent>
        <TabsContent value="addProject">
          <ProjectForm setActiveTab={setActiveTab} editIndex={editIndex} setEditIndex={setEditIndex} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProjectCLient;
