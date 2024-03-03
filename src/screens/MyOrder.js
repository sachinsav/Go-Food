import React, { useEffect, useState } from "react";
import { useCartContext } from "./CartContext";

function MyOrder() {

  const [orderHistory, setOrderHistory] = useState([])
  const data = useCartContext();
  async function getOrderData() {
    const order = await fetch("http://localhost:5000/api/getOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("email") }),
    });
    const orderJson = await order.json();

    if(orderJson && orderJson.orders){
    setOrderHistory(orderJson.orders.reverse());
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      await getOrderData();
    };
    fetchData();
  }, [data]);
  return (
    <div>
      <div className="container">
        <div className="row">
          {orderHistory && orderHistory.map(order => (<section className="gradient-custom-2 my-1 col-lg-6">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center">
                <div>
                  <div
                    className="card card-stepper"
                    style={{ borderRadius: "16px" }}
                  >
                    <div className="card-header p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <p className="text-muted mb-2">
                            {" "}
                            Order ID{" "}
                            <span className="fw-bold text-body">
                              {order.id}
                            </span>
                          </p>
                          <p className="text-muted mb-0">
                            {" "}
                            Place On{" "}
                            <span className="fw-bold text-body">
                              {order.date}
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <div className="d-flex flex-row mb-4 pb-2">
                        <div className="flex-fill">
                          <h5 className="bold">{order.name}</h5>
                          <p className="text-muted"> Qt: {order.qty} item</p>
                          <h4 className="mb-3">
                            {" "}
                            ₹ {order.price}{" "}
                            <span className="small text-muted">
                              {" "}
                              via (COD){" "}
                            </span>
                          </h4>
                        </div>
                        <div>
                          <img
                            className="align-self-center img-fluid"
                            src={order.img}
                            style={{height:"130px", width:"130px", objectFit:"cover"}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>))}
          
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
