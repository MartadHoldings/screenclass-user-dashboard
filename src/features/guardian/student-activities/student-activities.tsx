import ActivityCard from "@/components/guardian/student-activities/activity-card";
import BackgroundContainer from "@/components/shared/background-container";
import Header from "@/components/shared/header";
import React from "react";

export const StudentActivities = () => {
  return (
    <>
      <BackgroundContainer>
        <div className="mx-auto min-h-screen max-w-[1240px] bg-[#f1f1f1]">
          <div className="mx-3 min-h-screen bg-[#FAFAFA] pl-3 pr-3 md:mx-7 md:pl-4 md:pr-4 xl:pl-9">
            <Header title="Activities" />
            <div>
              <h2 className="segoe my-6 text-lg text-[#1B1B1B] md:text-xl">
                Temilola’s Activities
              </h2>
              <div className="space-y-2">
                {Array.from({ length: 7 }, (_, i) => (
                  <ActivityCard
                    key={i}
                    title="Activity Title"
                    desc="Lorem ipsum dolor sit amet consectetur. Enim id lectus felis gravida malesuada quam aliquam diam."
                    date="06-06-2023 10:00:34am"
                    last_seen="4 min ago"
                    status
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundContainer>
    </>
  );
};
