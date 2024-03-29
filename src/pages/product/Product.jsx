import { Publish } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';

import './product.css';
import Chart from '../../components/chart/Chart';
import { userRequest } from '../../requestMethods';

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  // NOTE: we can use useParams() also
  // const { productId } = useParams();
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(
          `orders/incomeStats?pid=${productId}`
        );
        const data = res.data?.data;
        const updatedData = data?.map((item) => ({
          month: MONTHS[item.month - 1],
          Sales: item.salesAmount,
        }));
        setPStats(updatedData);

        // console.log(res.data.data);
        // const list = res.data.data.sort((a, b) => {
        //   return a._id - b._id;
        // });
        // list.map((item) =>
        //   setPStats((prev) => [
        //     ...prev,
        //     { name: MONTHS[item._id - 1], Sales: item.total },
        //   ])
        // );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  // console.log(pStats);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={
                product.img ||
                'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              }
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">
                {product.inStock ? 'YES' : 'NO'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Price</label>
            <input type="text" placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={
                  product.img ||
                  'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                }
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
