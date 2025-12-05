
import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

import { toast, Toaster } from "react-hot-toast";

export default function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {

    console.log("user.photoURL:", user?.photoURL);

    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
  }, [user]);

  const handleOpen = () => {
    setName(user?.displayName || "");
    setPhotoURL(user?.photoURL || "");
    setEditing(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      console.log("Calling updateUserProfile with:", { displayName: name, photoURL });
      await updateUserProfile({ displayName: name, photoURL });
     
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      console.error("updateUserProfile error:", err);
      toast.error(err?.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <p className="text-gray-700">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
     
      <Toaster position="top-center" />
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt={user.displayName || "User"}
          className="w-32 h-32 rounded-full mb-4 object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://via.placeholder.com/150";
          }}
        />
        <h2 className="text-xl font-semibold mb-2">{user.displayName || "No Name"}</h2>
        <p className="text-gray-700 mb-4">{user.email}</p>

        {!editing ? (
          <button onClick={handleOpen} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Update Profile
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="w-full mt-4">
            <label className="block text-sm mb-1">Full name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mb-3"
              required
              disabled={saving}
            />
            <label className="block text-sm mb-1">Photo URL</label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full mb-3"
              placeholder="https://..."
              disabled={saving}
            />
            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </button>
              <button type="button" onClick={() => setEditing(false)} className="btn btn-ghost">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}














// 

