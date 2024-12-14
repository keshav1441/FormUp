import React from "react";
import { Button } from "./ui/button"; // Adjust the path as necessary
import { HiSaveAs } from "react-icons/hi"; // Ensure you have react-icons installed

function SaveFormBtn() {
  return (
    <Button variant="outline" className="gap-2">
      <HiSaveAs className="h-6 w-6" />
      Save
    </Button>
  );
}

export default SaveFormBtn;
