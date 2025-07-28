export interface TypingTextOptions {
    text: string;
    autoScroll?: boolean;
    startDelay?: number;
    interval?: number;
    loop?: boolean;
    loopDelay?: number;
    className?: string;
    style?: React.CSSProperties;
    cursor?: React.ReactElement<"span"> | null;
    onTypingStart?: () => void;
    onType?: (char: string, index: number) => void;
    onTypingEnd?: () => void;
}
export interface TypingTextHandle {
    pause: () => void;
    resume: () => void;
    reset: () => void;
    skip: () => void;
}
declare const TypingText: import('../../node_modules/react').ForwardRefExoticComponent<TypingTextOptions & import('../../node_modules/react').RefAttributes<TypingTextHandle>>;
export default TypingText;
