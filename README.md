# React Typing Text

React component for typing animation with full control – pause, resume, loop, custom cursor, and more.

## Install

```bash
npm install @pvvng/react-typing-text
```

## Simple Example

```tsx
import { useRef } from "react";
import { TypingText, TypingTextHandle } from "@pvvng/react-typing-text";

export default function Example() {
  const typingRef = useRef<TypingTextHandle>(null);

  return (
    <>
      <TypingText
        ref={typingRef}
        text="Hello, world!"
        interval={100}
        loop
        startDelay={500}
        onTypingStart={() => console.log("Typing started")}
        onType={(char, idx) => console.log(`Typed ${char} at ${idx}`)}
        onTypingEnd={() => console.log("Typing ended")}
      />

      <button onClick={() => typingRef.current?.pause()}>Pause</button>
      <button onClick={() => typingRef.current?.resume()}>Resume</button>
      <button onClick={() => typingRef.current?.reset()}>Reset</button>
    </>
  );
}
```

## Typing Text Options

| Prop            | Type                                    | Default             | Description                                                                                                                      |
| --------------- | --------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `text`          | `string`                                | —                   | The text string to animate with typing effect.                                                                                   |
| `autoScroll`    | `boolean`                               | `true`              | Whether to automatically scroll to the end as typing progresses.                                                                 |
| `startDelay`    | `number`                                | `0`                 | Delay in milliseconds before typing starts.                                                                                      |
| `interval`      | `number`                                | `60`                | Interval in milliseconds between typing each character.                                                                          |
| `loop`          | `boolean`                               | `false`             | Whether to loop the typing animation continuously.                                                                               |
| `loopDelay`     | `number`                                | `1000`              | Delay in milliseconds before restarting the looped typing animation.                                                             |
| `className`     | `string`                                | —                   | CSS class name applied to the container element.                                                                                 |
| `style`         | `React.CSSProperties`                   | —                   | Inline styles applied to the container element.                                                                                  |
| `cursor`        | `React.ReactElement<"span"> \| null`    | Default cursor span | Custom cursor element. Must be a `<span>` for default styles and auto-scroll to work properly. Set `null` to disable the cursor. |
| `onTypingStart` | `() => void`                            | —                   | Callback fired once when typing starts after `startDelay`.                                                                       |
| `onType`        | `(char: string, index: number) => void` | —                   | Callback fired on each typed character with the character and its index.                                                         |
| `onTypingEnd`   | `() => void`                            | —                   | Callback fired once when typing finishes (or after the last loop iteration).                                                     |

### Usage tips:

- Use startDelay to delay the start of typing (e.g., for synchronizing with other UI effects).
- Combine loop and loopDelay for repeated animations.
- Use onType to trigger side effects like playing typing sounds or logging.
- Pass a custom <span> cursor element to fully control cursor appearance and animations.
- Disable cursor by passing cursor={null} when no cursor is desired.

## TypingTextHandle

| Method   | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `pause`  | Pauses the typing animation.                                 |
| `resume` | Resumes the typing animation if paused and not finished.     |
| `reset`  | Resets the typing animation to the start and resumes typing. |

### Usage tips:

- Use the ref returned by useRef<TypingTextHandle>() to call these methods imperatively.
- pause and resume help control flow for advanced UIs (e.g., pausing when a modal opens).
- reset can be tied to events like changing the text prop or user-triggered replay.

## Default Cursor

If you do not provide a custom `cursor` prop, the component will render a default blinking cursor as a `<span>` element with the following styles:

- `display: inline-block`
- `vertical-align: middle`
- `width: 2px`
- `height: 1rem`
- `background-color: black`
- `margin-left: 4px`
- blinking animation

This default cursor is designed to visually resemble a typical text caret and supports **auto-scrolling** behavior when `autoScroll` is enabled.

> **Important:**

# React Typing Text

React component for typing animation with full control – pause, resume, loop, custom cursor, and more.

## Install

```bash
npm install @pvvng/react-typing-text
```

## Simple Example

```tsx
import { useRef } from "react";
import { TypingText, TypingTextHandle } from "@pvvng/react-typing-text";

export default function Example() {
  const typingRef = useRef<TypingTextHandle>(null);

  return (
    <>
      <TypingText
        ref={typingRef}
        text="Hello, world!"
        interval={100}
        loop
        startDelay={500}
        onTypingStart={() => console.log("Typing started")}
        onType={(char, idx) => console.log(`Typed ${char} at ${idx}`)}
        onTypingEnd={() => console.log("Typing ended")}
      />

      <button onClick={() => typingRef.current?.pause()}>Pause</button>
      <button onClick={() => typingRef.current?.resume()}>Resume</button>
      <button onClick={() => typingRef.current?.reset()}>Reset</button>
    </>
  );
}
```

## Typing Text Options

| Prop            | Type                                    | Default             | Description                                                                                                                      |
| --------------- | --------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `text`          | `string`                                | —                   | The text string to animate with typing effect.                                                                                   |
| `autoScroll`    | `boolean`                               | `true`              | Whether to automatically scroll to the end as typing progresses.                                                                 |
| `startDelay`    | `number`                                | `0`                 | Delay in milliseconds before typing starts.                                                                                      |
| `interval`      | `number`                                | `60`                | Interval in milliseconds between typing each character.                                                                          |
| `loop`          | `boolean`                               | `false`             | Whether to loop the typing animation continuously.                                                                               |
| `loopDelay`     | `number`                                | `1000`              | Delay in milliseconds before restarting the looped typing animation.                                                             |
| `className`     | `string`                                | —                   | CSS class name applied to the container element.                                                                                 |
| `style`         | `React.CSSProperties`                   | —                   | Inline styles applied to the container element.                                                                                  |
| `cursor`        | `React.ReactElement<"span"> \| null`    | Default cursor span | Custom cursor element. Must be a `<span>` for default styles and auto-scroll to work properly. Set `null` to disable the cursor. |
| `onTypingStart` | `() => void`                            | —                   | Callback fired once when typing starts after `startDelay`.                                                                       |
| `onType`        | `(char: string, index: number) => void` | —                   | Callback fired on each typed character with the character and its index.                                                         |
| `onTypingEnd`   | `() => void`                            | —                   | Callback fired once when typing finishes (or after the last loop iteration).                                                     |

### Usage tips:

- Use startDelay to delay the start of typing (e.g., for synchronizing with other UI effects).
- Combine loop and loopDelay for repeated animations.
- Use onType to trigger side effects like playing typing sounds or logging.
- Pass a custom <span> cursor element to fully control cursor appearance and animations.
- Disable cursor by passing cursor={null} when no cursor is desired.

## TypingTextHandle

| Method   | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `pause`  | Pauses the typing animation.                                 |
| `resume` | Resumes the typing animation if paused and not finished.     |
| `reset`  | Resets the typing animation to the start and resumes typing. |

### Usage tips:

- Use the ref returned by useRef<TypingTextHandle>() to call these methods imperatively.
- pause and resume help control flow for advanced UIs (e.g., pausing when a modal opens).
- reset can be tied to events like changing the text prop or user-triggered replay.

## Default Cursor

If you do not provide a custom `cursor` prop, the component will render a default blinking cursor as a `<span>` element with the following styles:

- `display: inline-block`
- `vertical-align: middle`
- `width: 2px`
- `height: 1rem`
- `background-color: black`
- `margin-left: 4px`
- blinking animation

This default cursor is designed to visually resemble a typical text caret and supports **auto-scrolling** behavior when `autoScroll` is enabled.

> **Important:**
>
> In HTML, a `<p>` element **cannot contain** block-level elements like `<div>` or nested `<p>`.
>
> For example, placing a `<div>` inside a `<p>` will cause **hydration errors** such as:  
> `"In HTML, <div> cannot be a descendant of <p>. This will cause a hydration error. <p> cannot contain a nested <div>."`
>
> To prevent these errors, the `cursor` prop **must be a `<span>` element** (or other inline elements) because the typing text and cursor are wrapped inside a `<p>`.  
> Using a `<span>` ensures valid HTML structure and avoids rendering/hydration issues.

If you want to disable the cursor completely, set the `cursor` prop to `null`.
