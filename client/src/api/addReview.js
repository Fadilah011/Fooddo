import axios from "axios";
import config from '../api/config';

const addReview = async (foodId, rating, comment) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}/api/v1/foods/${foodId}/reviews`,
      {
        rating,
        comment,
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        },
      }
    );

    console.log(response.data); // Tampilkan data respons jika diperlukan.
    // Lakukan penanganan sesuai dengan kebutuhan, misalnya memperbarui data ulasan atau menampilkan pesan sukses.
  } catch (error) {
    console.error(error);
  }
};

export default addReview;