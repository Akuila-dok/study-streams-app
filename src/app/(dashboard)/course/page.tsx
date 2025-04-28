// app/(dashboard)/course/page.tsx or app/course/page.tsx

"use client"

import React from "react"
import CourseDashboard from "@/components/CourseDashboard"

const CoursePage = () => {
  const courseName = "Mathematics"
  const instructorName = "Mr. Kazungu"

  return (
    <div>
      <CourseDashboard courseName={courseName} instructorName={instructorName} />
    </div>
  )
}

export default CoursePage
