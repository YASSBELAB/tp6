
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const message = err.message || 'Internal server error';

  const statusCode = message.toLowerCase().includes('not found')
    ? 404
    : message.toLowerCase().includes('non trouvé')
      ? 404
      : 400;

  res.status(statusCode).json({
    success: false,
    error: {
      status: statusCode,
      message
    }
  });
};
