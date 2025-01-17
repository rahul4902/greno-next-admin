import React from "react";
import { Edit2, Trash2, MapPin, Home, Briefcase } from "lucide-react";
import styles from "./CleanAddressCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCartAddress } from "../../../redux/cartSlice";


const CleanAddressCard = ({
  _id,
  userId,
  address1,
  address2,
  houseNo,
  locality,
  city,
  state,
  pincode,
  isBillingAddress,
  isShippingAddress,
  addressType,
  isPrimary,
}) => {
  
  const dispatch = useDispatch();
  const { items, selectedAddress } = useSelector((state) => state.cart);

  const handleAddressEdit = (_id) =>{
    
  }


  return (
    <div className={`${styles.card} ${selectedAddress == _id ? "border-3 border-primary-custom" : ""}`} onClick={()=>{ dispatch(setCartAddress(_id))}}>
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            {addressType === "home" ? (
              <Home size={18} />
            ) : (
              <Briefcase size={18} />
            )}
            <span>
              {addressType.charAt(0).toUpperCase() + addressType.slice(1)}{" "}
              Address
            </span>
          </h3>
          <div className={styles.actions}>
            <button className="btn btn-outline-primary btn-sm border-0" onClick={()=>{handleAddressEdit(_id)}}>
              <Edit2 size={16}/>
            </button>
            <button className="btn btn-outline-danger btn-sm border-0">
              <Trash2 size={16} />
            </button>
          </div>
        </div>
        <div className={styles.addressDetails}>
          <MapPin size={16} className={styles.mapPin} />
          <div>
            <p>
              {houseNo}, {address1}
            </p>
            {address2 && <p>{address2}</p>}
            <p>{locality}</p>
            <p>
              {city}, {state} - {pincode}
            </p>
          </div>
        </div>
        <div className={styles.badges}>
          {isPrimary && <span className={styles.primaryBadge}>Primary</span>}
          {isBillingAddress && (
            <span className={styles.billingBadge}>Billing</span>
          )}
          {isShippingAddress && (
            <span className={styles.shippingBadge}>Shipping</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CleanAddressCard;
