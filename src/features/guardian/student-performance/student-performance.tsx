import PerformanceCard from "@/components/guardian/student-performance/performance-card";
import Header from "@/components/shared/header";

export const StudentPerformance = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f1f1f1]">
        <div className="mx-7 min-h-screen bg-[#FAFAFA] pl-9 pr-4">
          <Header title="My Students" />
          <div className="">
            <h2 className="segoe my-6 text-xl text-[#1B1B1B]">
              Temilola Ann”s Performance
            </h2>
            <div className="space-y-2">
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
