import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import GradedAssignments from "@/components/GradedAssignment";
import PendingAssignments from "@/components/PendingAssignments";
import UploadContent from "@/components/UploadContent";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-6 flex gap-6 flex-col xl:flex-row bg-gray-100">
      {/* LEFT PANEL - Schedule & Assignments */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6">
        {/* Schedule Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-800">Schedule</h1>
          <BigCalendar />
        </div>

        {/* Assignments Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-800">Recent Assignments</h1>
          <div className="mt-4 flex gap-6">
            {/* Pending and Graded Assignments - Side by Side */}
            <div className="w-1/2">
              <PendingAssignments />
            </div>
            <div className="w-1/2">
              <GradedAssignments />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Announcements & Upload Content */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <Announcements />
        <UploadContent />
      </div>
    </div>
  );
};

export default TeacherPage;
