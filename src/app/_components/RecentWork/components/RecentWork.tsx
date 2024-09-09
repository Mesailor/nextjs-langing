import { RecentWorkCard } from "./RecentWorkCard";
import { recentWorkCompanies } from "./recentWorkCompanies";

export function RecentWork() {
  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <h2 className="text-center heading-2">RECENT WORK</h2>
        <p className="text-center text">This is what we proud of</p>
      </div>
      <div className="flex flex-col items-center md:grid grid-cols-2 gap-16">
        {recentWorkCompanies.map((company) => (
          <RecentWorkCard key={company.name} {...company} />
        ))}
      </div>
    </div>
  );
}
