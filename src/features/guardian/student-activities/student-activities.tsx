import ActivityCard from "@/components/guardian/student-activities/activity-card";
import Header from "@/components/shared/header";
import React from "react";

export const StudentActivities = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f1f1f1]">
        <div className="mx-7 min-h-screen bg-[#FAFAFA] pl-9 pr-4">
          <Header title="Activities" />
          <div>
            <h2 className="segoe my-6 text-xl text-[#1B1B1B]">
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
    </>
  );
};
