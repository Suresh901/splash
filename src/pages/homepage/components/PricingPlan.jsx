import { Crown, Medal } from "lucide-react";

export default function PricingPlans() {
  const plans = [
    {
      id: 1,
      name: "Silver Pack",
      icon: <Medal className="h-8 w-8 text-gray-400" />,
      price: 45,
      features: [
        "Mini - Toddler",
        "Coffee Break",
        "Total Classes - 15",
        "Group Lesson",
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: "Premium Pack",
      icon: <Crown className="h-8 w-8 text-gray-400" />,
      price: 65,
      features: [
        "Mini - Toddler",
        "Coffee Break",
        "Total Classes - 15",
        "Group Lesson",
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: "Platinum Pack",
      icon: <Medal className="h-8 w-8 text-gray-400" />,
      price: 95,
      features: [
        "Mini - Toddler",
        "Coffee Break",
        "Total Classes - 15",
        "Group Lesson",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            OUR PRICING PLAN
          </h2>
          <div className="flex items-center justify-center">
            <div className="h-px bg-blue-200 w-16"></div>
            <div className="mx-2 h-4 w-4 rounded-full bg-blue-500"></div>
            <div className="h-px bg-blue-200 w-16"></div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`w-full sm:w-64 text-center ${
                plan.highlighted
                  ? "shadow-xl border border-gray-200 relative"
                  : "bg-gray-50"
              }`}
            >
              <div className="p-6">
                <h3 className="text-blue-500 font-medium mb-4">{plan.name}</h3>
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-full">
                    {plan.icon}
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white py-3">
                <div className="text-xl font-bold">
                  ${plan.price}{" "}
                  <span className="text-sm font-normal">/month</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button
                    className={`px-6 py-2 text-sm ${
                      plan.highlighted
                        ? "bg-blue-600 text-white"
                        : "text-blue-600 border border-blue-600"
                    } rounded hover:opacity-90 transition-opacity cursor-pointer`}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
