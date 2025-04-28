import Announcements from "@/components/Announcements";
import StudentProgress from "@/components/StudentProgress";
import AttendanceTracker from "@/components/AttendanceTracker";
import PerformanceTracker from "@/components/PerformanceTracker";
import StudentActivities from "@/components/StudentActivties";

const ParentPage = () => {
  return (
    <div className="flex-1 p-6 flex gap-6 flex-col xl:flex-row bg-gray-100">
      {/* LEFT PANEL - Student Overview */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6">
        {/* Student Progress Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-800">Student Progress</h1>
          <StudentProgress />
        </div>

        {/* Attendance & Performance Section (Side by Side) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold text-gray-800">Performance & Attendance</h1>
          <div className="mt-4 flex gap-6">
            <div className="w-1/2">
              <PerformanceTracker />
            </div>
            <div className="w-1/2">
              <AttendanceTracker />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Announcements & Student Activities */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <Announcements />
        <StudentActivities />
      </div>
    </div>
  );
};

export default ParentPage;
