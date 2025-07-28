import { useRef } from "react";
import {
  DefaultCursor,
  TypingText,
  type TypingTextHandle,
} from "../components";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";

const meta = {
  title: "Examples/TypingTextExample",
  component: TypingText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A lightweight and fully customizable typing animation component for React.",
      },
    },
  },
} satisfies Meta<typeof TypingText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello React Typing Text!",
    interval: 60,
    loop: true,
    startDelay: 200,
    autoScroll: false,
    cursor: <DefaultCursor height="18px" />,
    style: { fontSize: 18, fontWeight: 600 },
    onType: action("onType"),
    onTypingStart: action("onTypingStart"),
    onTypingEnd: action("onTypingEnd"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default configuration with looping enabled and a custom cursor component.",
      },
    },
  },
};

export const WithCustomStyle: Story = {
  args: {
    text: "Typing with a little sparkle...",
    interval: 80,
    autoScroll: false,
    loop: true,
    loopDelay: 500,
    cursor: <span style={{ marginLeft: "4px", color: "#facc15" }}>✨</span>,
    style: {
      fontFamily: "'Fira Code', monospace",
      fontSize: "1.2rem",
      lineHeight: "1.8",
      textShadow: "1px 1px 2px rgba(250, 204, 21, 0.3)",
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "A styled version of TypingText with a sparkle ✨ cursor and a code-like font.",
      },
    },
  },
};

export const WithRefControl: Story = {
  args: {
    text: "You can control the typing with buttons!",
  },
  render: () => {
    const ref = useRef<TypingTextHandle>(null);

    return (
      <div>
        <TypingText
          ref={ref}
          text="You can control the typing with buttons!"
          interval={100}
          autoScroll={false}
          onType={(char, index) => {
            action("onType")(`${char} (${index})`);
          }}
          style={{ fontSize: 18, fontWeight: 600 }}
          onTypingStart={action("onTypingStart")}
          onTypingEnd={action("onTypingEnd")}
        />
        <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
          <button onClick={() => ref.current?.pause()}>Pause</button>
          <button onClick={() => ref.current?.resume()}>Resume</button>
          <button onClick={() => ref.current?.reset()}>Reset</button>
          <button onClick={() => ref.current?.skip()}>Skip</button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how to control the TypingText animation using ref-based imperative methods.",
      },
    },
  },
};
