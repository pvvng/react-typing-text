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
declare const TypingText: import('react').ForwardRefExoticComponent<TypingTextOptions & import('react').RefAttributes<TypingTextHandle>>;
export default TypingText;
