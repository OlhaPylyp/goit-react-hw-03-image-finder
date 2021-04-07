import axios from 'axios';

const fetchImages = ({ searchImage = '', currentPage = 1 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchImage}&page=${currentPage}&key=20342526-89d38198e8299a53d4950dffe&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response =>response.data.hits)
};
export default { fetchImages };
