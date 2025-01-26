"use client";
import React, { useEffect, useState } from "react";
import withHeader from "../../hoc/withHeader";
import "./ThankYou.css";
import Link from "next/link";
import apiClient from "../../services/apiClient";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const ThankYou = () => {
  const [order, setOrder] = useState(null);
  const searchParams = useSearchParams();
  useEffect(() => {
    
    async function getOrderById(){
        
        const orderId = searchParams.get('orderId');

        const response = await apiClient.get("/api/orders/"+orderId)
        if(response.data.status == 200){
            toast.success(response.data.message);
            setOrder(response?.data?.data)
        }else{
            toast.success(response.data.message);
        }
    }
    getOrderById();
  }, [searchParams]);

  
  return (
    <>
      {order ? (
        <div className="thank-you-container">
          <div className="thank-you-header">
            <h1>Thank You for Choosing Our Blood Diagnosis Service</h1>
            <p>
              Your health is our priority. We&apos;re processing your samples
              with utmost care.
            </p>
          </div>
          <div className="order-details">
            <div className="order-info">
              <h2>Booking Information</h2>
              <div className="info-item">
                <span>Order ID:</span>
                <span>{order.orderId}</span>
              </div>
              <div className="info-item">
                <span>Test Date:</span>
                <span>{order.createdAt}</span>
              </div>
              <div className="info-item">
                <span>Patient Name:</span>
                <span>{order.member?.name}</span>
              </div>
              <div className="info-item">
                <span>Payment Method:</span>
                <span>{order.paymentType == 'COD'?'Cash on Collection (CoC)':'Razorpay'}</span>
              </div>
            </div>
            <div className="items-list">
              <h3>Tests Performed</h3>
              {order.tests.map((test, index) => (
                <div key={index} className="item">
                  <span>{test.name}</span>
                  <span>{test.status}</span>
                </div>
              ))}
            </div>
            <div className="important-note">
              <p>
                <strong>Important:</strong> Your test results will be available
                within 3-5 business days. We will notify you via email once they
                are ready.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="text-center my-4">
        <Link href="/" className="btn-return">
          Return to Home
        </Link>
      </div>
    </>
  );
};

export default withHeader(ThankYou);

