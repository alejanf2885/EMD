interface CaseStudyCardProps {
    image: string
    title: string
    description: string
    stats: { label: string; value: string }[]
  }
  
  export function CaseStudyCard({ image, title, description, stats }: CaseStudyCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-24 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default CaseStudyCard

  