import { useParams } from "react-router-dom";

const Product = () => {
    const { productId } = useParams();
    return <div>This is the Product component. The id is: {productId}</div>;
};

export default Product;
