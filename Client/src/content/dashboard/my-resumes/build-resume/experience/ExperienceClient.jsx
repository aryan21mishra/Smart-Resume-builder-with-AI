import React, { useState } from "react";
import ExperienceList from "./ExperienceList";

import ExperienceForm from "./ExperienceForm";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import ExperienceHeader from "./ExperienceHeader";

const ExperienceClient = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [editIndex, setEditIndex] = useState(null);
  return (
    <>
      <ExperienceHeader />
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="list">
          <ExperienceList setActiveTab={setActiveTab} setEditIndex={setEditIndex} />
        </TabsContent>
        <TabsContent value="addExperience">
          <ExperienceForm setActiveTab={setActiveTab} editIndex={editIndex} setEditIndex={setEditIndex} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ExperienceClient;
