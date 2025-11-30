export const retry = async (fn, retries = 3) => {
  try {
    return await fn();
  } catch (e) {
    if (retries === 0) throw e;
    return retry(fn, retries - 1);
  }
};
