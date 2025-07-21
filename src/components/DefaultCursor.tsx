export interface DefaultCursorProps {
  width?: string;
  height?: string;
  cursorColor?: string;
  marginLeft?: string;
}

const DefaultCursor = ({
  width = "2px",
  height = "1rem",
  marginLeft = "4px",
  cursorColor = "black",
}: DefaultCursorProps) => {
  return (
    <span
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        width,
        height,
        marginLeft,
        backgroundColor: cursorColor,
      }}
    />
  );
};

export default DefaultCursor;
