export function useHistory(limit = 50) {
  const history: ImageData[] = [];
  const redo: ImageData[] = [];

  return {
    history,
    redo,
    limit,
  };
}
