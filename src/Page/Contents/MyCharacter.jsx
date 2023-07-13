export default function MyCharacter() {
  return (
    <div className="flex justify-center h-screen w-full my-10 px-10">
      <div className="relative">
        <div className="flex items-center justify-center bg-purple-400 h-full w-full rounded-lg">
          <div className="w-20 h-20 border-4 border-stone-300 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden">
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 text-white text-center font-medium mt-2">
          Pick Character
        </div>
      </div>
    </div>
  );
}
