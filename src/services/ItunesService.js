import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
};

class ItunesService {
    getProductList = async (data) => {
        try {
            let value = await axios.get(`https://itunes.apple.com/search?term=${data}`, config);
            if (!value)
                return;

            return value;
        } catch (error) {
            console.log(error)
        }
    }
}

export default ItunesService;