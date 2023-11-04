export const Statistics = options => {
  const { good, neutral, bad, total, positivePercentage } = options;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage} %</p>
    </div>
  );
};
