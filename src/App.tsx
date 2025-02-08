import { useState } from "react";
import { Code2, Zap, Server, Rocket, Lock, Sparkles } from "lucide-react";
import FeatureCard from "./components/FeatureCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 animate-ping bg-blue-500 rounded-full opacity-20"></div>
              <div className="relative bg-blue-500/20 p-4 rounded-full">
                <Sparkles className="w-12 h-12 text-blue-400" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            React19-Serverside-Kit
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            A powerful, production-ready starter kit for building modern React
            applications with server-side capabilities
          </p>

          {/* Interactive Demo */}
          <div className="space-y-2">
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium 
                         hover:bg-blue-600 transition-all duration-300 
                         transform hover:scale-105 active:scale-95
                         shadow-lg hover:shadow-blue-500/25"
            >
              Try Interactive Demo
            </button>
            <div className="mt-4 text-2xl font-semibold">
              <span className="bg-blue-500/10 px-4 py-2 rounded-lg">
                Counter: {count}
              </span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Optimized performance with server-side rendering and automatic code splitting for blazing fast load times."
          />
          <FeatureCard
            icon={Server}
            title="Server-Side Ready"
            description="Built-in server-side rendering capabilities with hydration and seamless client-side transitions."
          />
          <FeatureCard
            icon={Code2}
            title="TypeScript First"
            description="Full TypeScript support with strict type checking and intelligent IDE integration."
          />
          <FeatureCard
            icon={Lock}
            title="Security Focused"
            description="Enhanced security features with built-in XSS protection and secure-by-default configurations."
          />
          <FeatureCard
            icon={Rocket}
            title="Production Ready"
            description="Optimized build process with automatic code optimization and modern best practices."
          />
          <FeatureCard
            icon={Sparkles}
            title="Modern DX"
            description="Superior developer experience with hot module replacement and instant feedback loop."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
