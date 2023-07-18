type StatusProps = {
  status: 'Loading' | 'success' | 'error',
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === 'Loading') {
    message = 'Loading....';
  } else if (props.status === 'success') {
    message = 'date Fetech successfully';
  } else if (props.status === 'error') {
    message = 'date Fetech successfully';
  }
  return (
    <div>
      <h2> status - {message}</h2>
    </div>
  );
};
