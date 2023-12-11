import { useLayoutEffect } from "react";
const MIN_TEXT_AREA_HEIGHT = 52;
const MAX_TEXT_AREA_HEIGHT = 120;
const useAutoSizeTextArea = (textAreaRef, text) => {
    useLayoutEffect(() => {
        if (!textAreaRef)
            return;
        textAreaRef.style.height = `inherit`;
        console.log(textAreaRef.scrollHeight);
        const newHeight = Math.min(Math.max(textAreaRef.scrollHeight, MIN_TEXT_AREA_HEIGHT), MAX_TEXT_AREA_HEIGHT);
        textAreaRef.style.overflowY = newHeight >= MAX_TEXT_AREA_HEIGHT ? "scroll" : "hidden";
        textAreaRef.style.height = `${newHeight}px`;
    }, [text, textAreaRef]);
};
export default useAutoSizeTextArea;
