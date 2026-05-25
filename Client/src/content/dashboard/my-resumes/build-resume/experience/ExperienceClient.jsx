import React, { useState } from "react";
import ExperienceList from "./ExperienceList";

import ExperienceForm from "./ExperienceForm";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import ExperienceHeader from "./ExperienceHeader";

const ExperienceClient = () => {
  const [activeTab, setActiveTab] = useState("list");
  return (
    <>
      <ExperienceHeader />
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="list">
          <ExperienceList setActiveTab={setActiveTab} />
        </TabsContent>
        <TabsContent value="addExperience">
          <ExperienceForm setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ExperienceClient;
