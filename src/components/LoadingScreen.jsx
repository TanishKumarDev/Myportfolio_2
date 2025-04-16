import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "<Hello World />";

  useEffect(() => {
    let textIndex = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, textIndex));
      textIndex++;

      if (textIndex > fullText.length) {
        clearInterval(textInterval);
      }
    }, 100);

    let progressIndex = 0;
    const progressInterval = setInterval(() => {
      setProgress(progressIndex * (100 / fullText.length));
      progressIndex++;

      if (progressIndex > fullText.length) {
        clearInterval(progressInterval);
        setTimeout(() => {
          onComplete(); // Trigger onComplete once loading is done
        }, 500); // Wait 0.5 seconds after text is fully typed
      }
    }, 100);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Typing Effect Text */}
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      {/* Loading Message */}
      <div className="text-lg font-mono text-gray-300 mt-4">
        <p>Welocome to my profile! Please wait while the site is loading...</p>
        {/* You can modify this text as per your preference */}
      </div>

      {/* Progress Bar */}
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden mt-4">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
