export default function FeaturesSection() {
  return (
    <section className="bg-[#faf4ee] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center mb-6">
              <span className="text-xl">✦</span>
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-3">
              100% Handmade
            </h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Every stitch crafted by hand with love and attention to detail
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-xl">🎨</span>
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-3">
              Fully Customizable
            </h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Choose your colors, size, and style to make it uniquely yours
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-xl">⏳</span>
            </div>
            <h3 className="font-serif text-xl text-gray-900 mb-3">
              Made to Order
            </h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Created fresh just for you, typically ready in 2–3 weeks
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
