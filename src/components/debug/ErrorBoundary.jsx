import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }) {

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const EB = ({ children }) => (
  <ErrorBoundary
    fallbackRender={fallbackRender}
    onReset={() => {
      // Reset the state of your app so the error doesn't happen again
    }}
  >
    {children}
  </ErrorBoundary>
);

export default EB