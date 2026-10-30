export default function ImagePlaceholder({ src, alt = "", label, ratio = "16 / 9", className = "" }) {
  if (src) {
    return <img src={src} alt={alt} style={{ aspectRatio: ratio }} className={`w-full object-cover ${className}`} />;
  }
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`flex items-center justify-center border border-dashed border-gray-400 bg-gray-200 p-3 text-center text-sm text-gray-500 ${className}`}
    >
      Photo: {label}
    </div>
  );
}