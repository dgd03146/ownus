export async function uploadImage(file: File) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string);
  const result = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL as string, {
    method: 'POST',
    body: data,
  });
  return result.url;
}
