export default function PropsTable({ props }) {
  if (!props || props.length === 0) {
    return (
      <div className="py-4 px-6 bg-[#0d0d0d] rounded-lg mb-8">
        <p className="text-gray-400">No props available for this component.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg mb-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-2 px-4 text-left text-sm text-gray-300 font-semibold border-b border-gray-700">Prop</th>
            <th className="py-2 px-4 text-left text-sm text-gray-300 font-semibold border-b border-gray-700">Type</th>
            <th className="py-2 px-4 text-left text-sm text-gray-300 font-semibold border-b border-gray-700">Default</th>
            <th className="py-2 px-4 text-left text-sm text-gray-300 font-semibold border-b border-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr 
              key={prop.name} 
              className={index % 2 === 0 ? 'bg-[#0d0d0d]' : 'bg-gray-800'}
            >
              <td className="py-2 px-4 text-sm font-mono text-indigo-300">{prop.name}</td>
              <td className="py-2 px-4 text-sm text-gray-300">{prop.type}</td>
              <td className="py-2 px-4 text-sm text-gray-300 font-mono">{prop.default || '-'}</td>
              <td className="py-2 px-4 text-sm text-gray-300">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 