import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
};

class ItunesService {
    getProductList = async (data) => {

        let value = await axios.get(`https://itunes.apple.com/search?term=${data}`, config);
        if (!value)
            return;

        return value;
    }
}

export default ItunesService;