import Axios from 'axios';

async function getDescData(path) {
  try {
    return await Axios.get(path)
      .then((res) => res);
  } catch (error) {
    return new Error(error);
  }
}
export default getDescData;
