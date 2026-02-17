import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import CreateForm from "./FormCreate";
import { useNavigate } from "react-router-dom";

const EditFormModal = ({ formId, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/form/getUpdate/${formId}`);
        if (res.data.success) {
          setInitialData(res.data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [formId]);

  if (loading) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-xl overflow-y-auto max-h-[90vh]">
        <CreateForm
          isEdit={true}
          editData={initialData}
          onSuccess={() => {
            onSuccess();          // refresh list
            onClose();            // close modal
            navigate("/adminDashboard/form-request"); // ✅ CORRECT
          }}
        />
      </div>
    </div>
  );
};

export default EditFormModal;
