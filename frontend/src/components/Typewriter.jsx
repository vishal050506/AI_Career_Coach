import React, { useEffect, useRef } from "react";

const Typewriter = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const loadTypedJS = async () => {
      try {
        const Typed = (await import("typed.js")).default;

        const typed = new Typed(typewriterRef.current, {
          strings: ["Chart Your Path To Excellence"],
          typeSpeed: 200,
          backSpeed: 200,
          loop: true,
          showCursor: true, // Explicitly enable cursor
          cursorChar: "|", // Set cursor character
        });

        // Manually clean up duplicate cursors (if any)
        const cleanupDuplicateCursors = () => {
          const cursors = document.querySelectorAll(".typed-cursor");
          if (cursors.length > 1) {
            cursors.forEach((cursor, index) => {
              if (index > 0) cursor.remove(); // Keep only the first cursor
            });
          }
        };

        // Run cleanup after Typed.js initializes
        setTimeout(cleanupDuplicateCursors, 100);

        return () => typed.destroy();
      } catch (error) {
        console.error("Error loading typed.js:", error);
      }
    };

    loadTypedJS();
  }, []);

  return (
    <div className="inline-block">
      <span
        ref={typewriterRef}
        className="text-4xl font-medium text-orange-400"
        style={{ caretColor: "transparent" }} // Disable browser cursor
      />
    </div>
  );
};

export default Typewriter;
