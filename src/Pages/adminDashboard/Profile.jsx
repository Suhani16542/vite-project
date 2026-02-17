import { useState, useEffect } from "react";
import {
  Camera,
  Mail,
  User,
  Phone,
  MapPin,
  FileText,
  Image
} from "lucide-react";
import api from "../../api/axios";

const Profile = () => {
  const userId = localStorage.getItem("userId");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [formData, setFormData] = useState({
    profile_image: "",
    banner_image: "",
    bio: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    pincode: ""
  });

  const [preview, setPreview] = useState({
    profile_image: "",
    banner_image: ""
  });

  if (!userId) {
    return <div className="text-center mt-20">Please login again</div>;
  }

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/user/getUserById/${userId}`);
        const user = res.data.data;

        setUserInfo({
          name: user.username,
          email: user.email,
          phone: user.mobile || ""
        });

        setFormData({
          profile_image: user.profile_image || "",
          banner_image: user.banner_image || "",
          bio: user.bio || "",
          address: user.address || "",
          city: user.city || "",
          state: user.state || "",
          country: user.country || "India",
          pincode: user.pincode || ""
        });

        setPreview({
          profile_image: user.profile_image || "",
          banner_image: user.banner_image || ""
        });
      } catch {
        alert("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  /* ================= IMAGE UPLOAD ================= */
  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("image", file);

    const res = await api.post("/upload/single-image", data, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    return res.data.data.url;
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    setPreview(prev => ({
      ...prev,
      [name]: URL.createObjectURL(file)
    }));

    const imageUrl = await uploadImageToCloudinary(file);

    setFormData(prev => ({
      ...prev,
      [name]: imageUrl
    }));
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  /* ================= SAVE PROFILE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await api.put(`/user/update-profile/${userId}`, formData);
      alert("Profile updated successfully ✅");
    } catch {
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Loading profile...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="min-h-screen bg-white">

      {/* BANNER */}
      <div className="relative h-40 sm:h-56 bg-gray-200">
        <img
          src={preview.banner_image || "https://via.placeholder.com/1200x300"}
          className="w-full h-full object-cover"
          alt="banner"
        />
        <label className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-xl cursor-pointer">
          <Image size={18} />
          <input
            type="file"
            hidden
            name="banner_image"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">

        <h1 className="text-2xl font-bold text-green-600">
          Profile Settings
        </h1>

        {/* PROFILE IMAGE */}
        <div className="relative w-28 h-28">
          <img
            src={preview.profile_image || "https://i.ibb.co/4pDNDk1/avatar.png"}
            className="w-28 h-28 rounded-full object-cover border-2 border-green-500"
            alt="avatar"
          />
          <label className="absolute bottom-1 right-1 bg-black text-white p-2 rounded-full cursor-pointer">
            <Camera size={16} />
            <input
              type="file"
              hidden
              name="profile_image"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* BASIC INFO */}
        <div className="bg-black rounded-2xl p-6 space-y-4">
          <Input label="Name" icon={<User size={16} />} value={userInfo.name} disabled />
          <Input label="Email" icon={<Mail size={16} />} value={userInfo.email} disabled />
          <Input label="Phone" icon={<Phone size={16} />} value={userInfo.phone} disabled />
        </div>

        {/* DETAILS */}
        <div className="bg-black rounded-2xl p-6 space-y-4">
          <Textarea label="Bio" icon={<FileText size={16} />} name="bio" value={formData.bio} onChange={handleChange} />
          <Textarea label="Address" icon={<MapPin size={16} />} name="address" value={formData.address} onChange={handleChange} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="City" name="city" value={formData.city} onChange={handleChange} />
            <Input label="State" name="state" value={formData.state} onChange={handleChange} />
            <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
            <Input label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
          </div>
        </div>

        <button
          disabled={saving}
          className="
            w-full sm:w-auto
            bg-green-600 text-black font-semibold
            px-10 py-3 rounded-xl
            hover:bg-green-700 transition
            disabled:opacity-50
          "
        >
          {saving ? "Saving..." : "Save Profile"}
        </button>
      </div>
    </form>
  );
};

/* ================= INPUT COMPONENT ================= */
const Input = ({ label, icon, ...props }) => (
  <div>
    <label className="flex items-center gap-2 mb-1 text-green-500">
      {icon} {label}
    </label>
    <input
      {...props}
      className="w-full bg-white border border-gray-300 p-3 rounded-lg outline-none"
    />
  </div>
);

/* ================= TEXTAREA COMPONENT ================= */
const Textarea = ({ label, icon, ...props }) => (
  <div>
    <label className="flex items-center gap-2 mb-1 text-green-500">
      {icon} {label}
    </label>
    <textarea
      {...props}
      rows="3"
      className="w-full bg-white border border-gray-300 p-3 rounded-lg outline-none"
    />
  </div>
);

export default Profile;
