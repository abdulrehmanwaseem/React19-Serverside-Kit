function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-700/50 p-6 rounded-xl hover:bg-gray-700/70 transition-all duration-300 border border-gray-600/50 hover:border-blue-500/50 group">
      <div className="flex items-center gap-4 mb-3">
        <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;
