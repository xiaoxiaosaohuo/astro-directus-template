export function getAssetURL(id) {
  if (!id) return null;
  return `${import.meta.env.PUBLIC_ASSETS_URL}/assets/${id}`;
}