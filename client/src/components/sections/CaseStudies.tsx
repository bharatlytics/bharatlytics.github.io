import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Automotive Components Manufacturer",
    description: "40% reduction in machine downtime through predictive maintenance",
    image: "https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12",
    stats: {
      "OEE Improvement": "25%",
      "Cost Savings": "$2M/year",
      "Quality Rate": "99.9%"
    }
  },
  {
    title: "Large Retail Chain",
    description: "Inventory optimization leading to 30% reduction in stockouts",
    image: "https://images.unsplash.com/photo-1706210220394-eeda4906e02c",
    stats: {
      "Sales Increase": "15%",
      "Inventory Turnover": "+40%",
      "Customer Satisfaction": "95%"
    }
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our solutions have transformed businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group cursor-pointer">
                <div className="aspect-video relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowRight className="w-10 h-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(study.stats).map(([label, value]) => (
                      <div key={label} className="text-center">
                        <div className="text-xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-sm text-muted-foreground">{label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}