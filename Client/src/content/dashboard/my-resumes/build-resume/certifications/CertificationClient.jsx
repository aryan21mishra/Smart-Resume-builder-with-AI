import React, { useState } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import CertificationHeader from "./CertificationHeader";
import CertificationList from "./CertificationList";
import CertificationForm from "./CertificationForm";

const CertificationClient = () => {
  const [activeTab, setActiveTab] = useState("list");
  return (
    <>
      <CertificationHeader />
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="list">
          <CertificationList setActiveTab={setActiveTab} />
        </TabsContent>
        <TabsContent value="addCertification">
          <CertificationForm setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default CertificationClient;
