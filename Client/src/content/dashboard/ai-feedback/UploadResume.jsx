export default function UploadResume() {
  return (
    <label
      htmlFor="uploadFile1"
      className=" font-semibold text-sm rounded-md w-full h-48 flex flex-col items-center justify-center 
   cursor-pointer border  mx-auto mt-6 focus-within:ring-2 focus-within:ring-blue-500
   bg-neutral-900 :text-slate-300 :border-neutral-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-10 mb-4 fill-gray-400"
        viewBox="0 0 32 32"
        aria-hidden="true">
        <path
          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
          data-original="#000000"
        />
        <path
          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
          data-original="#000000"
        />
      </svg>

      <div>
        <p className="text-slate-400 font-semibold text-sm">
          Drag & Drop or <span className="text-blue-700">Choose file</span> to
          upload
        </p>
        <p className="text-xs font-normal text-slate-400 text-center mt-2">
          PNG, JPG SVG, WEBP, and GIF are Allowed.
        </p>
      </div>

      <input type="file" id="uploadFile1" className="sr-only" />
    </label>
  );
}
