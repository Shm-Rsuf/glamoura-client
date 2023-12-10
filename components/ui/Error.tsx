interface ErrorProps {
  error: boolean;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return <div className='text-center text-red'>{error}</div>;
};

export default Error;
