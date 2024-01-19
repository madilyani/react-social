import { imageIcon } from "@/app/Base/SVG";
import React from "react";

export default function Upload() {
  return (
    <div className="upload">
      <div className="upload__inner">
        <div className="upload__content">
          <input type="file" />
          <div className="upload__icon">{imageIcon}</div>
          <h2 className="sm">Add Product Image</h2>
          <h4>Press here and add to image</h4>
        </div>
      </div>
    </div>
  );
}
