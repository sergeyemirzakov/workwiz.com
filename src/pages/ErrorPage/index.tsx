import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;

  const renderErrorText = () => {
    if (isRouteErrorResponse(error)) {
      return (
        <p className="text-red-500">
          {error.status} {error.statusText}
        </p>
      );
    }
    return <p className="text-red-600">{error.message || 'Unknown Error'}</p>;
  };

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {renderErrorText()}
    </>
  );
};

export default ErrorPage;
