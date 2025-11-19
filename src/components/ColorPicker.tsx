import { Label } from "@/components/ui/label";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const presetColors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
  ];

  return (
    <div className="flex items-center gap-3">
      <Label htmlFor="color-picker" className="text-sm text-muted-foreground">
        Color:
      </Label>
      <input
        id="color-picker"
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-10 rounded cursor-pointer border-2 border-border"
      />
      <div className="flex gap-1">
        {presetColors.map((presetColor) => (
          <button
            key={presetColor}
            onClick={() => onChange(presetColor)}
            className="w-6 h-6 rounded border-2 border-border hover:scale-110 transition-transform"
            style={{ backgroundColor: presetColor }}
            aria-label={`Select ${presetColor}`}
          />
        ))}
      </div>
    </div>
  );
};
