export const ProgressBar = ({ length, index }) => {
  const lineWidth = 100 / length;
  const linePosition = lineWidth * index;

  return (
    <div className="progress-bar">
      <hr
        className="progress-bar__current"
        style={{ width: `${lineWidth}%`, left: `${linePosition}%` }}
      />
    </div>
  );
};
