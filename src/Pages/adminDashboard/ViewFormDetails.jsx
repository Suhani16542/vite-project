import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import api from "../../api/axios";

const ViewFormDetails = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/form/getFormById/${id}`);
        if (res.data.success) {
          setForm(res.data.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading form details...
      </div>
    );
  }

  if (!form) {
    return (
      <div className="p-10 text-center text-red-500">
        Form not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto bg-black text-white p-6 rounded-xl space-y-6">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-green-400">
            {form.title}
          </h1>

          <NavLink
            to="/adminDashboard/form-request"
            className="text-sm text-blue-400 hover:underline"
          >
            ← Back to Forms
          </NavLink>
        </div>

        {/* BASIC INFO */}
        <div className="space-y-2">
          <p><span className="text-green-400">Slug:</span> {form.slug}</p>
          <p><span className="text-green-400">Description:</span> {form.description}</p>
          <p><span className="text-green-400">Exam Authority:</span> {form.examAuthority || "N/A"}</p>
          <p>
            <span className="text-green-400">Official Website:</span>{" "}
            {form.officialWebsite ? (
              <a
                href={form.officialWebsite}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                Visit
              </a>
            ) : (
              "N/A"
            )}
          </p>
        </div>

        {/* CATEGORY */}
        <div>
          <p><span className="text-green-400">Main Category:</span> {form.mainCategory?.name}</p>
          <p><span className="text-green-400">Sub Category:</span> {form.subCategory?.name || "N/A"}</p>
        </div>

        {/* IMPORTANT DATES */}
        <div>
          <h2 className="text-lg text-green-500 mb-2">Important Dates</h2>
          <p>Application Start: {new Date(form.applicationStartDate).toLocaleDateString()}</p>
          <p>Application End: {new Date(form.applicationEndDate).toLocaleDateString()}</p>
          <p>Exam Date: {form.examDate ? new Date(form.examDate).toLocaleDateString() : "N/A"}</p>
          <p>Result Date: {form.resultDate ? new Date(form.resultDate).toLocaleDateString() : "N/A"}</p>
        </div>

        {/* FEES */}
        <div>
          <h2 className="text-lg text-green-500 mb-2">Fees Structure</h2>
          <p>Form Fees: ₹{form.formFees}</p>
          <p>Platform Charge: ₹{form.platformCharge}</p>
          <p>Total Payable: ₹{form.totalPayable ?? form.formFees + form.platformCharge}</p>
          <p>Payment Required: {form.paymentRequired ? "Yes" : "No"}</p>
        </div>

        {/* VACANCY & ELIGIBILITY */}
        <div>
          <h2 className="text-lg text-green-500 mb-2">Vacancy & Eligibility</h2>
          <p>Number of Vacancies: {form.numberOfVacancies}</p>
          <p>Eligibility Criteria: {form.eligibilityCriteria || "N/A"}</p>
        </div>

        {/* REQUIRED DOCUMENTS */}
        <div>
          <h2 className="text-lg text-green-500 mb-2">Required Documents</h2>

          {form.requiredDocuments?.length > 0 ? (
            <ul className="space-y-2">
              {form.requiredDocuments.map((doc, index) => (
                <li
                  key={index}
                  className="border border-gray-700 rounded-lg p-3"
                >
                  <p><span className="text-green-400">Name:</span> {doc.name}</p>
                  <p>Mandatory: {doc.isMandatory ? "Yes" : "No"}</p>
                  <p>Formats: {doc.allowedFormats?.join(", ")}</p>
                  <p>Max Size: {doc.maxSizeMB} MB</p>
                  <p>Source: {doc.source}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No documents required</p>
          )}
        </div>

        {/* EXTRA DETAILS */}
        <div>
          <h2 className="text-lg text-green-500 mb-2">Extra Information</h2>
          <p>Extra Details: {form.extraDetails || "N/A"}</p>
          <p>Instructions: {form.instructions || "N/A"}</p>
          <p>Terms & Conditions: {form.termsAndConditions}</p>
        </div>

        {/* SLOT BOOKING */}
        <div>
          <h2 className="text-lg text-green-500 mb-2">Slot Booking</h2>
          <p>Enabled: {form.slotBookingEnabled ? "Yes" : "No"}</p>

          {form.slotTypes?.length > 0 && (
            <ul className="space-y-2 mt-2">
              {form.slotTypes.map((slot, i) => (
                <li key={i} className="border border-gray-700 p-3 rounded-lg">
                  <p>Label: {slot.label}</p>
                  <p>Start: {slot.startTime ? new Date(slot.startTime).toLocaleString() : "N/A"}</p>
                  <p>End: {slot.endTime ? new Date(slot.endTime).toLocaleString() : "N/A"}</p>
                  <p>Max Bookings: {slot.maxBookings ?? "N/A"}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* STATUS & ANALYTICS */}
        <div>
          <h2 className="text-lg text-green-500 mb-2">Status & Analytics</h2>
          <p>Status: {form.isActive ? "Active" : "Inactive"}</p>
          <p>Featured: {form.isFeatured ? "Yes" : "No"}</p>
          <p>Visibility: {form.visibility}</p>
          <p>Views: {form.numberOfViews}</p>
          <p>Requests: {form.numberOfRequests}</p>
          <p>Completed Requests: {form.completedRequests}</p>
          <p>Revenue Generated: ₹{form.revenueGenerated}</p>
        </div>

        {/* AUDIT */}
        <div className="text-sm text-gray-400">
          <p>Created At: {new Date(form.createdAt).toLocaleString()}</p>
          <p>Updated At: {new Date(form.updatedAt).toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};

export default ViewFormDetails;
