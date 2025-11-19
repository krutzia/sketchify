import { DrawingCanvas } from "@/components/DrawingCanvas";
import { Paintbrush } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-sky flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-6 animate-in fade-in duration-700">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Paintbrush className="w-10 h-10 text-white" />
            <h1 className="text-4xl font-bold text-white">Sketchify</h1>
          </div>
          <p className="text-white/80 text-lg">
            Create your masterpiece with our simple drawing tools
          </p>
        </div>

        <DrawingCanvas />

        <footer className="text-center py-4 text-white/80">
          Created with ❤️ by <strong>krutzia</strong>
        </footer>
      </div>
    </div>
  );
};

export default Index;
