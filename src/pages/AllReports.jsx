// src/pages/AllReports.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const AllReports = () => {
  const { user, token } = useContext(AuthContext);
  const [reports, setReports] = useState([]);
  const [filterArea, setFilterArea] = useState("");

  const fetchReports = async () => {
    try {
      const res = await axios.get("/api/admin/reports", {
        headers: { Authorization: `Bearer ${token}` },
        params: filterArea ? { area: filterArea } : {},
      });

      console.log("Admin fetched reports:", res.data.reports);
      setReports(Array.isArray(res.data.reports) ? res.data.reports : []);
    } catch (err) {
      console.error("Admin report fetch error", err);
    }
  };

  useEffect(() => {
    if (token && user?.role === "admin") {
      fetchReports();
    }
  }, [filterArea, token, user]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            All Reports
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <span className="text-slate-600 text-sm font-medium">
              Administrator Dashboard
            </span>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Filter by Area
          </label>
          <input
            type="text"
            placeholder="Enter area name to filter reports..."
            className="input w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-slate-900 placeholder-slate-400"
            value={filterArea}
            onChange={(e) => setFilterArea(e.target.value.toLowerCase())}
          />
        </div>

        {/* Reports Section */}
        <div className="space-y-6">
          {reports.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-slate-500 text-lg font-medium">
                No reports found
              </p>
              <p className="text-slate-400 text-sm mt-1">
                {filterArea
                  ? "Try adjusting your filter criteria"
                  : "Reports will appear here once submitted"}
              </p>
            </div>
          ) : (
            reports.map((r) => (
              <div
                key={r._id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  {/* Report Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                          ID: {r._id}
                        </span>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            r.status === "resolved"
                              ? "bg-green-100 text-green-700"
                              : r.status === "in-progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {r.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {r.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {r.description}
                      </p>
                    </div>
                  </div>

                  {/* Report Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-500">Category:</span>
                      <span className="text-sm font-medium text-slate-700 capitalize">
                        {r.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-500">State:</span>
                      <span className="text-sm font-medium text-slate-700">
                        {r.state}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-500">Area:</span>
                      <span className="text-sm font-medium text-slate-700">
                        {r.area || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Report Image */}
                  {r.imageUrl && (
                    <div className="mt-4">
                      <img
                        src={r.imageUrl}
                        alt="Report"
                        className="w-full max-w-md h-48 object-cover rounded-lg border border-slate-200 shadow-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Results Count */}
        {reports.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Showing {reports.length} report{reports.length !== 1 ? "s" : ""}
              {filterArea && ` in "${filterArea}"`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReports;
