import { Layers, Zap, Circle, Grid, Quote } from "lucide-react"

export function CompanyLogos() {
  const companies = [
    { name: "Layers", icon: Layers, color: "bg-purple-100 text-purple-600" },
    { name: "Sisyphus", icon: Zap, color: "bg-green-100 text-green-600" },
    { name: "Circooles", icon: Circle, color: "bg-blue-100 text-blue-600" },
    { name: "Catalog", icon: Grid, color: "bg-gray-100 text-gray-600" },
    { name: "Quotient", icon: Quote, color: "bg-purple-100 text-purple-600" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-xs mb-6">Join 4,000+ companies already growing</p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {companies.map((company) => {
            const IconComponent = company.icon
            return (
              <div key={company.name} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${company.color}`}>
                <IconComponent className="w-4 h-4" />
                <span className="font-medium text-sm">{company.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
