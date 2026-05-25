import React, { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";
import ProjectHeader from "./ProjectHeader";

const ProjectCLient = () => {
  const [activeTab, setActiveTab] = useState("list");
  return (
    <>
      <ProjectHeader />
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="list">
          <ProjectList setActiveTab={setActiveTab} />
        </TabsContent>
        <TabsContent value="addProject">
          <ProjectForm setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProjectCLient;
