import axios from "axios";

export const fetchCourses = async () => {
  const result = await axios.get(
    "https://developers.teachable.com/v1/courses",
    {
      headers: {
        apikey: process.env.TEACHABLE_APIKEY,
      },
    },
  );

  return result.data.courses;
};
