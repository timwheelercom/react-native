import axios from 'axios';

const API_KEY = 'ePGLpVmkELtuPSoF3tuNI6pXxXvhaRTRJrKIyud0fgnzVeqwX9sCOdxW6MwEYinT6sqBR2Tvw5iTggE6XHi-1ramBSSC7etgWzB81VnQCMSWhqkPT_VbvBbCI9MdW3Yx';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
});


