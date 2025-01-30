import { FileText } from 'lucide-react';

export default function Description({ equipment }) {
  return (
    <div className="bg-gray-400 rounded-lg p-4 sm:p-6 mt-4">
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="h-6 w-6 text-gray-400" />
        <h3 className="text-xl font-semibold text-gray-100">Description</h3>
      </div>
      
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {equipment.description}
        </p>
      </div>
    </div>
  );
}