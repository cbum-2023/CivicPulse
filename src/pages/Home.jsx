import React from "react";
import {
  ArrowRight,
  FileText,
  CheckCircle,
  Eye,
  Construction,
  Lightbulb,
  Trash2,
  MapPin,
  Star,
  Droplets,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section with Optimized Background */}
      <section
        className="px-4 py-20 sm:py-28 text-center relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.7), rgba(31,41,55,0.6)),
            url('https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Raise your voice for a better neighbourhood 🇮🇳
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Report civic issues. Get them tracked. Build better cities together.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            Report an Issue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Issues Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            Issues We Help Solve
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            From broken infrastructure to civic amenities, report any issue
            affecting your community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Construction,
                title: "Road Issues",
                desc: "Potholes, broken roads, debris",
                bgFrom: "gray-100",
                bgTo: "slate-100",
              },
              {
                icon: Lightbulb,
                title: "Street Lighting",
                desc: "Broken lights, dark areas",
                bgFrom: "gray-100",
                bgTo: "blue-50",
              },
              {
                icon: Trash2,
                title: "Waste Management",
                desc: "Garbage overflow, dumping",
                bgFrom: "gray-100",
                bgTo: "green-50",
              },
              {
                icon: Droplets,
                title: "Water Issues",
                desc: "Leaks, broken pipes",
                bgFrom: "gray-100",
                bgTo: "cyan-50",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-${item.bgFrom} to-${item.bgTo} rounded-xl p-6 hover:shadow-xl transition-shadow duration-100 border border-gray-200 text-center`}
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
                  <item.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-blue-50 to-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: FileText,
              num: "500+",
              label: "Issues Reported",
              bg: "bg-green-100",
            },
            {
              icon: MapPin,
              num: "120",
              label: "Towns Covered",
              bg: "bg-blue-100",
            },
            {
              icon: Star,
              num: "4.8★",
              label: "User Satisfaction",
              bg: "bg-yellow-100",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl shadow bg-white border">
              <div
                className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {item.num}
              </h3>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FileText,
              step: "1",
              title: "Report the Issue",
              content:
                "Snap a photo, add location details, and describe the civic problem.",
            },
            {
              icon: Eye,
              step: "2",
              title: "Verified by Community",
              content: "Local members review and verify reported issues.",
            },
            {
              icon: CheckCircle,
              step: "3",
              title: "Marked as Resolved",
              content: "Track progress and mark it resolved when done.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section
        className="px-4 py-20 text-center relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(31,41,55,0.95), rgba(31,41,55,0.85)),
            url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=compress&cs=tinysrgb&w=1920')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to make a difference?
          </h2>
          <p className="text-xl mb-8 text-gray-200 drop-shadow-md">
            Join thousands of citizens working together to build better
            communities across India.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-slate-800 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            Start Reporting Issues
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer Credits */}
      <footer className="bg-gray-900 text-gray-400 text-sm text-center py-4">
        Innovated & Designed by{" "}
        <span className="text-white font-semibold">Shivam, IIIT Ranchi</span>
      </footer>
    </div>
  );
};

export default Home;
