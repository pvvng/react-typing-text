import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

export interface TypingTextOptions {
  text: string;
  autoScroll?: boolean;
  startDelay?: number;
  interval?: number;
  loop?: boolean;
  loopDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  /**
   * Custom cursor element. Must be a <span> if you want default styles and auto-scroll to work correctly.
   * Set to `null` to disable the cursor.
   */
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

const TypingText = forwardRef<TypingTextHandle, TypingTextOptions>(
  (
    {
      text,
      autoScroll = true,
      startDelay = 0,
      interval = 60,
      loop = false,
      loopDelay = 1000,
      className,
      style,
      cursor,
      onTypingStart,
      onType,
      onTypingEnd,
    },
    ref
  ) => {
    const [sequence, setSequence] = useState("");
    const [textCount, setTextCount] = useState(0);
    const endRef = useRef<HTMLSpanElement>(null);
    const isTypingPaused = useRef(true);

    const initState = () => {
      setSequence("");
      setTextCount(0);
    };

    useEffect(() => {
      if (cursor && cursor.type !== "span") {
        console.warn("cursor must be a <span> element.");
      }
    }, [cursor]);

    useEffect(() => {
      initState(); // 상태 초기화
      isTypingPaused.current = true; // 우선 정지

      const timeout = setTimeout(() => {
        isTypingPaused.current = false;
        onTypingStart?.();
      }, startDelay); // start delay만큼 대기

      return () => clearTimeout(timeout);
    }, [text]);

    useEffect(() => {
      const handleTypingEnd = () => {
        if (loop) {
          isTypingPaused.current = true;
          setTimeout(() => {
            initState();
            onTypingStart?.();
            isTypingPaused.current = false; // 재시작
          }, loopDelay);
        }

        isTypingPaused.current = true;
        return onTypingEnd?.(); // end typing callback
      };

      const typingInterval = setInterval(() => {
        if (isTypingPaused.current) return;

        if (textCount >= text.length) {
          handleTypingEnd();
        }

        const nextChar = text[textCount];
        onType?.(nextChar, textCount);
        setSequence((prev) => prev + nextChar);
        setTextCount((prev) => prev + 1);
      }, interval);

      return () => clearInterval(typingInterval);
    }, [text, textCount, loop, interval, onTypingEnd]);

    useEffect(() => {
      if (!autoScroll) return;
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [textCount]);

    useImperativeHandle(ref, () => ({
      pause: () => {
        isTypingPaused.current = true;
      },
      resume: () => {
        if (textCount < text.length) {
          isTypingPaused.current = false;
        }
      },
      reset: () => {
        initState();
        isTypingPaused.current = false; // 정지 종료
        onTypingStart?.();
      },
      skip: () => {
        initState();
        setSequence(text);
        onTypingEnd?.();
        isTypingPaused.current = true;
      },
    }));

    return (
      <p
        className={className}
        style={{
          whiteSpace: "pre-line",
          wordBreak: "normal",
          ...style,
        }}
      >
        {sequence}
        {cursor !== null && cursor}
        <span
          ref={endRef}
          style={{
            display: "inline-block",
            height: 0,
            marginTop: 1,
          }}
        />
      </p>
    );
  }
);

export default TypingText;
