
db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "courseId",
      as: "courseInfo"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      age: 1,
      "courseInfo.name": 1,
      "courseInfo.fee": 1
    }
  }
])



db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "Id",
      foreignField: "courseId",
      as: "courseInfo"
    }
  }
])


db.courses.aggregate([
  {
    $lookup: {
      from: "students",
      localField: "courseId",
      foreignField: "courseId",
      as: "enrolledStudents"
    }
  },
  {
    $unwind: "$enrolledStudents"
  },
  {
    $project: {
      _id: 0,
      name: 1,
      enrolledStudents: 1
    }
  }
])



db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "courseId",
      as: "courseInfo"
    }
  },
  { $match: { "courseInfo": { $exists: true } } },
  { $unwind: "$courseInfo" }
])



db.students.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "courseId",
      as: "courseDetails"
    }
  },
  {
    $match: { "courseDetails.0": { $exists: true } }
  },

])
