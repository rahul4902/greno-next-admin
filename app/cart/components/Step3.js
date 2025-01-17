// components/Step2.js
import { MapPinHouse, Plus } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import AddAddressModal from "./AddAddressModal";

import apiClient from "../../../services/apiClient";
import { API_URL } from "../../../utils/constant";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCartAddress } from "../../../redux/cartSlice";
import styles from "./CleanAddressCard.module.css";
import { Edit2, Trash2, MapPin, Home, Briefcase } from "lucide-react";

const Step3 = ({ onNext, onBack, onPatientSelection }) => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editAddressData, setEditAddressData] = useState({});

  const [address, setAddress] = useState([]);
  const { items, selectedAddress } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getAddressList = useCallback(async () => {
    try {
      let response = await apiClient.get(`${API_URL}api/address/list`);
      console.log("response", response);
      let address = response?.data?.data?.map((_v, _x) => ({
        ..._v,
        id: _v._id,
        tests: items?.map((_cv, _cx) => ({
          ..._cv,
          id: _cv._id,
          checked: true,
        })),
      }));
      setAddress(address || []);
    } catch (error) {
      toast.error(error.message);
    }
  }, [items]);

  const handleCloseModal = () => {
    setEditMode(false);
    setShowModal(false);
    setEditAddressData({});
  };
  const handleOpenModal = () => {
    setEditMode(false);
    setShowModal(true);
    setEditAddressData({});
  };

  const handleAddressEdit = (data) => {
    setShowModal(true);
    setEditMode(true);
    setEditAddressData(data);
  };

  useEffect(() => {
    getAddressList();
  }, [getAddressList]);

  return (
    <div className="container">
      <h4>
        <MapPinHouse size={24} /> Address
      </h4>
      <button
        className="btn btn-lg btn-outline-primary w-100 mb-2"
        onClick={() => handleOpenModal()}
      >
        <Plus /> New Address
      </button>

      <div className={styles.cardContainer}>
        {address.map((address, index) => {
          if (!selectedAddress && address?.isPrimary) {
            dispatch(setCartAddress(address?._id));
          }

          return (
            <div
              className={`${styles.card} ${
                selectedAddress == address?._id
                  ? "border-3 border-primary-custom"
                  : ""
              }`}
              key={index}
            >
              <div className={styles.cardContent}>
                <div className={styles.header}>
                  <h3 className={styles.title}>
                    {address?.addressType === "home" ? (
                      <Home size={18} />
                    ) : (
                      <Briefcase size={18} />
                    )}
                    <span>
                      {address?.addressType.charAt(0).toUpperCase() +
                        address?.addressType.slice(1)}{" "}
                      Address
                    </span>
                  </h3>

                  <div className={styles.actions}>
                    <div
                      className={styles.badges}
                      onClick={() => {
                        dispatch(setCartAddress(address?._id));
                      }}
                    >
                      {address?.isPrimary && (
                        <span className={styles.primaryBadge}>Primary</span>
                      )}
                      {address?.isBillingAddress && (
                        <span className={styles.billingBadge}>Billing</span>
                      )}
                      {address?.isShippingAddress && (
                        <span className={styles.shippingBadge}>Shipping</span>
                      )}
                    </div>
                    <button
                      className="btn btn-outline-primary btn-sm border-0"
                      onClick={() => {
                        handleAddressEdit(address);
                      }}
                    >
                      <Edit2 size={16} />
                    </button>
                    <button className="btn btn-outline-danger btn-sm border-0">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div
                  className={styles.addressDetails}
                  onClick={() => {
                    dispatch(setCartAddress(address?._id));
                  }}
                >
                  <MapPin size={16} className={styles.mapPin} />
                  <div>
                    <p>
                      {address?.houseNo}, {address?.address1}
                    </p>
                    {address?.address2 && <p>{address?.address2}</p>}
                    <p>{address?.locality}</p>
                    <p>
                      {address?.city}, {address?.state} - {address?.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <AddAddressModal
        editAddressData={editAddressData}
        editMode={editMode}
        show={showModal}
        onClose={handleCloseModal}
        getAddressList={getAddressList}
      />
    </div>
  );
};

export default Step3;
