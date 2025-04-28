import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import StudentProgress from "@/components/StudentProgress";
import AttendanceTracker from "@/components/AttendanceTracker";
import PerformanceTracker from "@/components/PerformanceTracker";
import StudentActivities from "@/components/StudentActivties";

const ParentPage = () => {
  return (
    <div className="p-4 xl:p-6 grid gap-4 xl:gap-6 grid-cols-1 xl:grid-cols-3 bg-gray-100 min-h-screen">
      {/* LEFT PANEL - Student Progress (Takes 2 columns) */}
      <div className="bg-white p-4 xl:p-6 rounded-lg shadow-md col-span-2">
        <h1 className="text-lg xl:text-xl font-semibold text-gray-800">Parent Monitoring Student Progress</h1>
        <StudentProgress />
      </div>

      {/* RIGHT PANEL - Announcements (Takes 1 column) */}
      <div className="bg-white p-4 xl:p-6 rounded-lg shadow-md">
        <Announcements />
      </div>

      {/* Performance & Attendance - Side by Side on Large Screens */}
      <div className="bg-white p-4 xl:p-6 rounded-lg shadow-md col-span-2">
        <h1 className="text-lg xl:text-xl font-semibold text-gray-800">Performance & Attendance</h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <PerformanceTracker />
          <AttendanceTracker />
        </div>
      </div>

      {/* Student Activities (Takes 1 column) */}
      <div className="bg-white p-4 xl:p-6 rounded-lg shadow-md">
        <StudentActivities />
      </div>
    </div>
  );
};

export default ParentPage;

