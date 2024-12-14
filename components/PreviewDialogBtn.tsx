import React from "react";
import { Button } from "./ui/button"; // Adjust the path as necessary
import { MdPreview } from "react-icons/md"; // Ensure you have react-icons installed

function PreviewDialogBtn() {
  return (
    <Button variant="outline" className="gap-2">
      <MdPreview className="h-6 w-6" />
      Preview
    </Button>
  );
}

export default PreviewDialogBtn;
