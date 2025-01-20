import PersonalDetailsForm from "@/components/guardian/settings/personal-details-form";
import QuizPerformanceCard from "@/components/guardian/student-profile/quiz-performance-card";
import StudentDetailsCard from "@/components/guardian/student-profile/student-details-card";
import Header from "@/components/shared/header";

export const StudentProfile = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f1f1f1]">
        <div className="mx-7 min-h-screen bg-[#FAFAFA] pb-4 pl-9 pr-4">
          <Header title="Student’s Profile" />
          <div>
            <h2 className="segoe my-6 text-xl font-bold text-[#1b1b1b]">
              Temilola Ann’s Profile
            </h2>
            <p className="segoe mt-4 text-[#1b1b1b]">Student’s Details</p>
            <div className="mt-4 flex gap-7">
              <StudentDetailsCard />
              <QuizPerformanceCard />
            </div>
            <PersonalDetailsForm action="read" />
          </div>
        </div>
      </div>
    </>
  );
};
