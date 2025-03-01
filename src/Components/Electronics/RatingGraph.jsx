function RatingGraph({ rating }) {
  return (
    <div className="text-center mb-8">
      <h3 className="text-xl font-bold mb-4 inline-block px-4 py-2 text-gray-500">
        ____________________________________________________________ Ratings ____________________________________________________________
      </h3>
      <div className="mb-8 flex justify-center">
        <div className="w-full lg:w-1/2">
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rate) => (
              <div key={rate} className="flex items-center">
                <span className="w-8 text-gray-700">{rate}★</span>
                <div className="w-full bg-gray-200 h-2 mx-2 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${(rating?.rate || 0) * 20}%` }}
                  ></div>
                </div>
                <span className="text-gray-700">{(rating?.count || 0) * (rate / 5)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default RatingGraph;