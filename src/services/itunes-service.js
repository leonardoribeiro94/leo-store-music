import axios from "axios";
const config = {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
};

class ItunesService {
    getProductList = async (data) => {
        let value = await axios.get(`https://itunes.apple.com/search?term=${data}`, config)
            .then((res) => res.data)
            .catch(error => console.log(error));
        if (!value.results)
            return;

        return value.results;
    }
}

export default ItunesService;