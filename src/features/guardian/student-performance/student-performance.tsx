import PerformanceCard from "@/components/guardian/student-performance/performance-card";
import Header from "@/components/shared/header";

export const StudentPerformance = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f1f1f1]">
        <div className="min-h-screen bg-[#FAFAFA]">
          <Header />
          <div className="py-5 ml-14">
            <h2 className="segoe text-xl text-[#1B1B1B]">
              Temilola Ann”s Performance
            </h2>
            <div className="mt-6 space-y-2">
              <PerformanceCard status="passed" />
              <PerformanceCard status="failed" />
              <PerformanceCard status="passed" />
              <PerformanceCard status="failed" />
              <PerformanceCard status="passed" />
              <PerformanceCard status="failed" />
              <PerformanceCard status="passed" />
              <PerformanceCard status="failed" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
