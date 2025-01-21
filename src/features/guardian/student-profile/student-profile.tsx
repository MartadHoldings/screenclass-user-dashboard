import PersonalDetailsForm from "@/components/guardian/settings/personal-details-form";
import QuizPerformanceCard from "@/components/guardian/student-profile/quiz-performance-card";
import StudentDetailsCard from "@/components/guardian/student-profile/student-details-card";
import BackgroundContainer from "@/components/shared/background-container";
import Header from "@/components/shared/header";

export const StudentProfile = () => {
  return (
    <>
      <BackgroundContainer>
        <div className="mx-auto min-h-screen max-w-[1240px] bg-[#f1f1f1]">
          <div className="mx-3 min-h-screen bg-[#FAFAFA] pl-3 pr-3 md:mx-7 md:pl-4 md:pr-4 xl:pl-9">
            <Header title="Student’s Profile" />
            <div>
              <h2 className="segoe my-6 text-lg font-bold text-[#1b1b1b] md:text-xl">
                Temilola Ann’s Profile
              </h2>
              <p className="segoe mt-4 text-[#1b1b1b]">Student’s Details</p>
              <div className="mt-4 flex flex-col gap-3 md:flex-row md:gap-7">
                <StudentDetailsCard />
                <QuizPerformanceCard />
              </div>
              <PersonalDetailsForm action="read" />
            </div>
          </div>
        </div>
      </BackgroundContainer>
    </>
  );
};
