function Polaroid({
  imageSrc,
  caption,
}: {
  imageSrc: string
  caption: string
}) {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <img
          src={imageSrc}
          alt="Polaroid"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="bg-white p-4">
        <p className="text-center text-gray-700">{caption}</p>
      </div>
    </div>
  )
}

export default Polaroid
