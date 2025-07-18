import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { serverEndpoint } from "../config/config";
import { useSelector } from "react-redux";

function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const reduxUser = useSelector(state => state.userDetails);
    // Prefer email from location.state, then redux, then empty
    const initialEmail = location.state?.email || reduxUser?.email || "";
    const hideEmail = !!(location.state?.email || reduxUser?.email);
    const [form, setForm] = useState({
        email: initialEmail,
        code: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        setSuccess("");
        if (form.newPassword !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${serverEndpoint}/auth/reset-password`, {
                email: form.email,
                code: form.code,
                newPassword: form.newPassword
            });
            setSuccess("Password reset successful. You can now log in.");
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setError(err?.response?.data?.message || "Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                    <form onSubmit={handleSubmit}>
                        {!hideEmail && (
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="mb-3">
                            <label htmlFor="code" className="form-label">Reset Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="code"
                                name="code"
                                value={form.code}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                name="newPassword"
                                value={form.newPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword; 