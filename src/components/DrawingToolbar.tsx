import { Button } from "@/components/ui/button";
import { Paintbrush, Eraser, Trash2, Download } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface DrawingToolbarProps {
  tool: "pen" | "eraser";
  onToolChange: (tool: "pen" | "eraser") => void;
  onClear: () => void;
  onDownload: () => void;
  lineWidth: number;
  onLineWidthChange: (width: number) => void;
}

export const DrawingToolbar = ({
  tool,
  onToolChange,
  onClear,
  onDownload,
  lineWidth,
  onLineWidthChange,
}: DrawingToolbarProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Button
        variant={tool === "pen" ? "default" : "outline"}
        size="sm"
        onClick={() => onToolChange("pen")}
      >
        <Paintbrush className="w-4 h-4 mr-2" />
        Pen
      </Button>

      <Button
        variant={tool === "eraser" ? "default" : "outline"}
        size="sm"
        onClick={() => onToolChange("eraser")}
      >
        <Eraser className="w-4 h-4 mr-2" />
        Eraser
      </Button>

      {tool === "pen" && (
        <div className="flex items-center gap-2 px-3">
          <span className="text-sm text-muted-foreground">Size:</span>
          <Slider
            value={[lineWidth]}
            onValueChange={(value) => onLineWidthChange(value[0])}
            min={1}
            max={10}
            step={1}
            className="w-24"
          />
        </div>
      )}

      <Button variant="destructive" size="sm" onClick={onClear}>
        <Trash2 className="w-4 h-4 mr-2" />
        Clear
      </Button>

      <Button variant="secondary" size="sm" onClick={onDownload}>
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
    </div>
  );
};
